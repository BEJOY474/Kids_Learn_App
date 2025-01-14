import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import apiUrl from "../IpAddress";

const { width } = Dimensions.get("window"); // Get screen width
const fontSize = width * 0.06;

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState(""); // State to store user data
  const [userCount, setUserCount] = useState(""); // State to store user count

  // Fetch user data using AsyncStorage token
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const userRes = await axios.post(`${apiUrl}/api/user/userData`, { token });
        setUserData(userRes.data.data);

        const countRes = await axios.get(`${apiUrl}/api/admin/userCount`);
        setUserCount(countRes.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle back button press to show exit confirmation
  const handleBackPress = () => {
    Alert.alert("Exit App", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Exit",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  // Handle logout action
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: logout }, // Ensure logout is called here
    ]);
  };

  // Logout function
  const logout = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/admin/logout`);
      if (res.data.statusCode === 200) {
        await AsyncStorage.setItem("isAdminLoggedin", "");
        await AsyncStorage.setItem("token", JSON.stringify(false));
        navigation.navigate("AdminLog"); // Navigate to AdminLog after logout
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Use useFocusEffect to reload data on navigation
  useFocusEffect(
    React.useCallback(() => {
      getData();

      // Optional: Display a toast message on navigation
      Toast.show({
        type: "success",
        text1: "Welcome Back, Admin!",
        text2: "Dashboard refreshed.",
        visibilityTime: 3000,
      });

      return () => {
        console.log("HomeScreen unfocused");
      };
    }, [])
  );

  useEffect(() => {
    const backHandlerListener = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandlerListener.remove(); // Clean up on component unmount
    };
  }, []);

  const handleUserClick = () => {
    alert("Manage Users Section");
  };

  const handleAddBookClick = () => {
    alert("Add Book Section");
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Total Info Section */}
        <View style={styles.cardContainer}>
          <View style={styles.card2} onPress={handleUserClick}>
            <FontAwesome name="users" size={38} color="#333" />
            <Text style={styles.numTitle}>{userCount}</Text>
            <Text style={styles.cardText}>Total Users</Text>
          </View>

          <View style={styles.card2} onPress={handleAddBookClick}>
            <Entypo name="shopping-cart" size={38} color="#333" />
            <Text style={styles.numTitle}>123</Text>
            <Text style={styles.cardText}>Orders</Text>
          </View>

          <View style={styles.card2} onPress={handleAddBookClick}>
            <FontAwesome5 name="money-bill-alt" size={38} color="#333" />
            <Text style={styles.numTitle}>1438 BDT</Text>
            <Text style={styles.cardText}>Total Money</Text>
          </View>
        </View>

        {/* Admin Options Section */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={handleUserClick}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={handleAddBookClick}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3081/3081839.png",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Add Book</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: "7%",
    backgroundColor: "#5a67d8",
    zIndex: 1,
  },
  title: {
    fontSize: fontSize,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  numTitle: {
    fontSize: fontSize,
    fontWeight: "bold",
    color: "green",
  },
  scrollViewContainer: {
    marginTop: 100,
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  card: {
    width: width / 2.4,
    height: 180,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    width: width / 2.4,
    height: 180,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f5ad65",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
