import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Dimensions, Keyboard, TouchableWithoutFeedback } from "react-native";

const { width, height } = Dimensions.get("window");

import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { ActivityIndicator } from "react-native-paper";

import apiUrl from "../IpAddress";

export default function AdminLogin({ props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDis, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
 
  const handleSubmit = async () => {
    if (!email || !password) {
     // Alert.alert("Error", "Please enter both email and password.");
      Toast.show({
        type: 'error',
        text1:'Error',
        text2: 'Please enter both email and password.',
        visibilityTime: 3000

      });
      return;
    }

    setLoading(true);
    const userData = { email, password };

    try {
      const res = await axios.post(
        `${apiUrl}/api/admin/login`,
        userData
      );
    //  Alert.alert("", res.data.message);
      AsyncStorage.setItem("token", res.data.token);
      AsyncStorage.setItem("isAdminLoggedin", JSON.stringify(true));
      navigation.navigate("AdminHome");
    } catch (err) {
      console.error(err);
     // Alert.alert("Error", "Invalid Admin!");
      Toast.show({
        type: 'error',
        text1:'Error',
        text2: 'Invalid Admin!',
        visibilityTime: 3000

      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
       
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
        >
       
          <View style={styles.topImageContainer}>
            <Image
              source={require("../assets/topVector.png")}
              style={styles.topImage}
            />
          </View>

          <View style={styles.helloContainer}>
            <Text style={styles.kidsText}>Kids Learn</Text>
          </View>

          <View>
            <Text style={styles.signInText}>Sign in to Admin panel</Text>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="user-o"
              size={22}
              color="#420475"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile or Email"
              style={styles.textInput}
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              color="#420475"
              style={styles.smallIcon}
              size={22}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={!passwordDis}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!passwordDis)}>
              {passwordDis ? (
                <Feather
                  name="eye-off"
                  style={{ marginRight: 5 }}
                  color="green"
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{ marginRight: 5 }}
                  color="green"
                  size={23}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.forgatePassContainer}>
            <Text style={{ color: "#420475", fontWeight: "700" }}>
              Forgot Password
            </Text>
          </View>

          <View style={styles.signinBtnContainer} >
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={styles.buttonText}>Login </Text>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <AntDesign name="arrowright" size={24} color="#fff" />
              )}
            </TouchableOpacity>
          </View>


          <View style={styles.createAccountContainer}>
            <Text>Login as a </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.bottomText}
            >
              User
            </Text>
          </View>

          <View style={styles.leftVectorContainer}>
            <ImageBackground
              source={require("../assets/bottomVector.png")}
              style={styles.leftVectioImage}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },

  topImageContainer: {},
  topImage: {
    width: "100%",
    height: height * 0.2,
  },
  helloContainer: {},
  kidsText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    borderRadius: 20,
    marginHorizontal: "10%",
    elevation: 10,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginVertical: 15,
    alignItems: "center",
  },

  smallIcon: {
    marginRight: 10,
  },

  textInput: {
    flex: 1,
  },

  forgatePassContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 8,
    marginRight: "10%",
  },

  signinBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  loginBtn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#4c669f",
    borderWidth: 1,
    borderColor: "rgba(59, 89, 152, 0.8)",
    flexDirection: "row",
    width: "45%",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  createAccountContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  bottomText: {
    textDecorationLine: "underline",
  },

  leftVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  leftVectioImage: {
    height: height * 0.4,
    width: width * 0.5,
  },
});
