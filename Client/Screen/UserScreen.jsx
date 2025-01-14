import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  Platform, 
  ScrollView,
  ActivityIndicator, 
  Alert
} from "react-native";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import apiUrl from "../IpAddress";

export default function UserScreen() {
  const [useData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios.post(`${apiUrl}/api/user/userData`, { token: token }).then(res => {
      setLoading(false);
      setUserData(res.data.data);
    });
  };

    // Handle Delete action
    const handleDelete = () => {
      Alert.alert("Delete", "Are you sure you want to delete your account?", [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: deleteAccount }, // Ensure logout is called here
      ]);
    };

     // delete function
     const deleteAccount = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          Alert.alert("Error", "User not logged in.");
          return;
        }
    
        const response = await axios.delete(`${apiUrl}/api/user/deleteUserData/${useData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        // Log the backend's response message
        console.log("Backend Response:", response.data.message);
    
        // Remove the token and navigate to the Login screen
        await AsyncStorage.removeItem("token");
        Alert.alert("Success", "Your account has been deleted.", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      } catch (error) {
        console.error("Delete Account Error:", error.response?.data?.message || error.message);
        Alert.alert("Error", "Failed to delete your account. Please try again.");
      }
    };
    


  useEffect(() => { getData(); }, []);


  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      showsVerticalScrollIndicator={false}
    >
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
                  : useData.image,
              }}
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{useData.name}</Text>
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

        {/* Styled Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom : "10%"
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    backgroundColor: "#fff",
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
    marginTop: -40,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15  ,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    elevation: 3,
   
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
