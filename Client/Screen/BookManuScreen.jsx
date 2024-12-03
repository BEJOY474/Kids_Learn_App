import React, { useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Abc from "./allBooks/Abc";

const videoSource = require("../assets/k2.mp4");

export default function BookManuScreen() {
  const navigation = useNavigation();
  const videoRef = useRef(null);

  useEffect(() => {
   
    if (videoRef.current) {
      videoRef.current.playAsync();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.stopAsync();
      }
    };
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.nonTouchableContainer}>
        <Video
          ref={videoRef}
          source={videoSource}
          style={styles.video}
          isLooping
          isMuted={false} // Keep sound if you want
          resizeMode="cover" // You can use 'cover' to ensure it fills the screen without stretching
          shouldPlay
        />
      </View>


      {/* Scrollable View for Images */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bookAndLogo}>
          <View style={styles.middleContainer}>
            <Text style={{ color: "#fff", textAlign:'center' }}>All kids books</Text>
          </View>

          <View style={{marginRight :'5%', top:5}}>
            <FontAwesome6 name="readme"   size={28} color="#8a39cb" />
          </View>
        </View>

        {/* Container holding the images */}
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("A B C Book")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/abc.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("1 2 3 Book")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/oneTwo.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Birds Book")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/bird.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("a3")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/frt.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("a4")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/animal.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("a5")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/rhy.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Alif Baa Book")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/alif.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Bangla Alphabet")}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../assets/ABC/oaa.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 211,
  },
  bookAndLogo:{
    flex:1,
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems : 'center'
  },
  middleContainer: {
    backgroundColor: "#8a39cb",
    width: "35%",
    padding: 10,
    marginTop: 10,
    marginLeft: "4%",
    borderRadius: 10,
  },
  nonTouchableContainer: {
    pointerEvents: "none",
  },
  scrollContainer: {
    paddingBottom: 230,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 8,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    width: "30%",
    marginBottom: 10,
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
