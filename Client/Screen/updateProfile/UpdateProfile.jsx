import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import Back from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import styles from "./stylesProfileEdit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import apiUrl from "../../IpAddress";

function UpdateProfile({ props }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [profession, setProfession] = useState("Engineer");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(true);

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const update = async () => {
    setLoading(true);
    const userData = {
      name,
      email,
      mobile,
      image,
      gender,
      profession,
    };
//user/updateUserData
    try {
      const res = await axios.post(
        `${apiUrl}/api/user/updateUserData`,
        userData
      );
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "Dear user",
        text2: "Update has been successful!",
        visibilityTime: 3000,
      });
    } catch (err) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Update failed!",
        visibilityTime: 3000,
      });
    } finally {
      setLoading(false);
    }
    console.log("Data : ", userData);
  };

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post(
        `${apiUrl}/api/user/userData`,
        { token: token }
      );

      console.log("User data:", response.data.data);

      const userData = response.data.data;
      setName(userData.name);
      setEmail(userData.email);
      setMobile(userData.mobile);
      setGender(userData.gender);
      setImage(userData.image);
      setProfession(userData.profession);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View>
          <View style={styles.camDiv}>
            <View style={styles.camIconDiv}>
              <Back name="camera" size={22} style={styles.cameraIcon} />
            </View>

            <TouchableOpacity onPress={() => selectPhoto()}>
              <Avatar.Image
                size={140}
                style={styles.avatar}
                source={{
                  uri: image == "" || image == "null"
                    ? "https://via.placeholder.com/150"
                    : image,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <View style={styles.infoEditView}>
              <Text style={styles.infoEditFirst_text}>Username</Text>
              <TextInput
                placeholder="Your Name"
                placeholderTextColor="#999797"
                style={styles.infoEditSecond_text}
                onChangeText={setName}
                value={name}
              />
            </View>

            <View style={styles.infoEditView}>
              <Text style={styles.infoEditFirst_text}>Email</Text>
              <TextInput
                editable={false}
                placeholder="Your Email"
                placeholderTextColor="#999797"
                style={styles.infoEditSecond_text}
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <View style={styles.infoEditView}>
              <Text style={styles.infoEditFirst_text}>Gender</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.radioView}>
                  <Text style={styles.radioText}>Male</Text>
                  <View style={styles.radioButtons}>
                    <RadioButton
                      value="Male"
                      status={gender === "Male" ? "checked" : "unchecked"}
                      onPress={() => setGender("Male")}
                    />
                  </View>
                </View>
                <View style={styles.radioView}>
                  <Text style={styles.radioText}>Female</Text>
                  <View style={styles.radioButtons}>
                    <RadioButton
                      value="Female"
                      status={gender === "Female" ? "checked" : "unchecked"}
                      onPress={() => setGender("Female")}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.infoEditView}>
              <Text style={styles.infoEditFirst_text}>Profession</Text>
              <TextInput
                placeholder="Profession"
                placeholderTextColor="#999797"
                style={styles.infoEditSecond_text}
                onChangeText={setProfession}
                value={profession}
              />
            </View>

            <View style={styles.infoEditView}>
              <Text style={styles.infoEditFirst_text}>Mobile No</Text>
              <TextInput
                placeholder="Your Mobile No"
                placeholderTextColor="#999797"
                keyboardType="numeric"
                maxLength={11}
                style={styles.infoEditSecond_text}
                onChangeText={setMobile}
                value={mobile}
              />
            </View>
          </View>

          {/* Update Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={update}>
              <Text style={styles.buttonText}> 
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                "Update Profile"
              )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default UpdateProfile;
