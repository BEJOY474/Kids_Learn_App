import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function OneTwo() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true); 
  const bgSound = useRef(null);
  const playSound1 = async () => {
    try {
      setTests("1 One");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/one.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound2 = async () => {
    try {
      setTests("2 Two");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/two.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound3 = async () => {
    try {
      setTests("3 Three");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/three.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound4 = async () => {
    try {
      setTests("4 Four");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/four.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound5 = async () => {
    try {
      setTests("5 Five");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/five.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound6 = async () => {
    try {
      setTests("6 Six");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/six.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound7 = async () => {
    try {
      setTests("7 Seven");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/seven.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound8 = async () => {
    try {
      setTests("8 Eight");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/eight.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound9 = async () => {
    try {
      setTests("9 Nine");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/nine.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound10 = async () => {
    try {
      setTests("10 Ten");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/ten.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const loadBgSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/oneTwoMusic/oneTwo.mp3")
      );
      bgSound.current = sound;
      await bgSound.current.setIsLoopingAsync(true);
      if (bgMusicEnabled) {
        await bgSound.current.playAsync();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadBgSound();

      return () => {
        if (bgSound.current) {
          bgSound.current.unloadAsync();
          bgSound.current = null;
        }
      };
    }, [bgMusicEnabled]) 
  );

  const toggleBgMusic = async () => {
    setBgMusicEnabled((prev) => !prev); 
    if (bgSound.current) {
      if (bgMusicEnabled) {
        await bgSound.current.pauseAsync();
      } else {
        await bgSound.current.playAsync();
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{texts}</Text>

        <TouchableOpacity onPress={toggleBgMusic} style={styles.musicSwitch}>
      <Icon
        name={bgMusicEnabled ? 'volume-up' : 'volume-off'}
        size={24}
        color="#000" // You can set your preferred color here
      />
    </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={playSound1} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/oneTwoPic/one.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound2} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/oneTwoPic/two.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound3} style={styles.imageWrapper}>
            <Image
                source={require("../../assets/oneTwoPic/three.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound4} style={styles.imageWrapper}>
            <Image
               source={require("../../assets/oneTwoPic/four.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound5}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/oneTwoPic/five.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound6}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/oneTwoPic/six.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound7}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/oneTwoPic/svn.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound8}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/oneTwoPic/eight.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound9}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../../assets/oneTwoPic/nine.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound10}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/oneTwoPic/tn.png")}
              style={styles.image}
            />
          </TouchableOpacity>

         
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#e5f1f1",
    zIndex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection : 'row'
  },
  headerText: {
    color: "#000",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    width: '85%'
  },

 

  container: {
    paddingBottom:"30%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: 75, // Add padding to prevent content from overlapping the header
  },
  imageWrapper: {
    width: "30%",
    marginBottom: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
