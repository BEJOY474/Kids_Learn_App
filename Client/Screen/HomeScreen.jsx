import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import Carousel from "react-native-reanimated-carousel";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import apiUrl from "../IpAddress";

const { width } = Dimensions.get("window"); // Get screen width

export default function HomeScreen() {
  const [userData, setUserData] = useState(""); // State to store user data
  const navigation = useNavigation();
  // Fetch user data using AsyncStorage token
  const getData = async () => {
    const token = await AsyncStorage.getItem("token");
    axios
      .post(`${apiUrl}/api/user/userData`, { token: token })
      .then((res) => {
        setUserData(res.data.data);
      });
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

  // useEffect hook for component mount and back handler setup
  useEffect(() => {
    getData();
    setTimeout(() => {
      Toast.show({
        type: "success",
        text1: "Dear user",
        text2: "Login success!",
        visibilityTime: 3000,
      });
    }, 1000);

    const backHandlerListener = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandlerListener.remove(); // Clean up on component unmount
    };
  }, []);

  // Array of image URLs for the carousel
  const imageUrls = [
    "https://celebratepicturebooks.com/wp-content/uploads/2020/04/screen-shot-2020-04-14-at-4.50.42-pm.png?w=440",

    "https://lurnsmart.com/wp-content/uploads/2021/04/ABC-Books-for-Kids-Resized-1.jpg",
    "https://i.pinimg.com/736x/8c/92/1a/8c921a00f9fb44485f58376cecef22d8.jpg",
    "https://static.wikia.nocookie.net/animals-are-cool/images/a/a0/Super-Dee-Dooper_Book_of_Animal_Facts_1.jpg/revision/latest/scale-to-width-down/1200?cb=20230830111954",
    "https://thumbor.prod.vidiocdn.com/tA6vNGRnZC2GqFimI3tcBQIu1I4=/1366x480/filters:quality(30)/vidio-web-prod-film/uploads/film/image_landscape/7347/cheetahboo-nursery-rhymes-kids-song-f90893.jpg",
  ];

  const textData = [
    "20% discount for all books",
    "New arrivals every week",
    "Free delivery on orders over $50",
    "Exclusive deals for members",
  ];

  return (
    <View style={styles.container}>
      {/* Top Carousel */}
      <Carousel
        loop
        width={width} // Set the carousel width to the screen width
        height={width / 2} // Set height as a fraction of width for 100% coverage
        autoPlay={true}
        data={imageUrls}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View>
            <Image
              source={{ uri: imageUrls[index] }}
              style={styles.carouselImage}
              resizeMode="contain"
            />
          </View>
        )}
      />

      {/* Manu Container */}
      <View style={styles.manuContainer}>
        <Text style={styles.manuTextTop}>Menu</Text>
        <View style={styles.divider} />

        <View style={styles.menuList}>
          <TouchableOpacity
            style={styles.manuItem}
            onPress={() => {
              navigation.navigate("Book Menu");
            }}
          >
            <Image
              source={require("../assets/images-removebg-preview.png")}
              style={styles.icon}
            />
            <Text style={styles.manuText}>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.manuItem}>
            <Image
              source={require("../assets/order.png")}
              style={styles.icon}
            />
            <Text style={styles.manuText}>Buy Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Carousel */}
      <Carousel
        loop
        width={width} 
        height={width / 2} 
        autoPlay={true}
        data={textData}
        scrollAnimationDuration={2000}
        renderItem={({ index }) => (
          <View style={styles.carouselItem2}>
            <Text style={styles.carouselText}>{textData[index]}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  carouselText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  carouselItem2: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#8a39cb",
  bottom : "-26%",
    padding: 20,
  },
  carouselImage: {
    width: "100%",
    height: width / 2,
  },
  manuContainer: {
    paddingHorizontal: 20,
    marginTop: 100,
  },
  manuTextTop: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#333",
    marginBottom: 10,
  },
  menuList: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderRadius: 10,
  },
  manuItem: {
    alignItems: "center",
    backgroundColor: "#8a39cb",
    width: "40%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "#fff",

    shadowColor: "#333",
    shadowOffset: { width: 0, height: 4 },

    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 10,
  },
  manuText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    width: "100%",
    height: 120,
    marginBottom: 10,
  },
});
