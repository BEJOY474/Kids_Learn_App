import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Platform } from "react-native";
import { FontAwesome, MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import apiUrl from "../IpAddress";

export default function ProfileScreen() {
  const [useData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios.post(`${apiUrl}/api/user/userData`, { token: token }).then(res => {
    //  console.log("Data profile: ", res.data);
      setLoading(false)
      setUserData(res.data.data);
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []) 
  );

  useEffect(() => {
    // Set the navigation bar options
 
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit Profile",  { userAllData: useData })}>
          <FontAwesome5 name="user-edit" size={24} style={{ marginRight: 15 }} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Sky-blue background */}
      <ImageBackground
        source={require("../assets/wave.png")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Profile Image */}
        <View style={styles.profileContainer}>
  <Image
    source={{
      uri: useData === "" || useData === "null"
        ? "https://via.placeholder.com/150"
        : Platform.OS === 'android'
          ? useData.image // Use Android-specific image URL if needed
          : useData.image 

    }}

   
    
    style={styles.profileImage}
  />
  <Text style={styles.userName}>{useData.name  }</Text>
</View>
      </ImageBackground>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={24} color="orange" />
          <Text style={styles.infoText}>{useData.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="user" size={24} color="green" />
          <Text style={styles.infoText}>{useData.gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Entypo name="suitcase" size={24} color="purple" />
          <Text style={styles.infoText}>{useData.profession}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="phone" size={24} color="red" />
          <Text style={styles.infoText}>{useData.mobile}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: '60%',
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    top: -40,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    top: -35,
  },
  infoContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    top: -70,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
