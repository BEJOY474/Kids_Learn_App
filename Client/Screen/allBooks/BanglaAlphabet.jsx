import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function BanglaAlphabet() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true);
  const bgSound = useRef(null);
  const oo = async () => {
    try {
      setTests("অ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani1.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const aa = async () => {
    try {
      setTests("আ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani2.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ee = async () => {
    try {
      setTests("ই");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani3.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const eee = async () => {
    try {
      setTests("ঈ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani4.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const uu = async () => {
    try {
      setTests("উ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani5.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const uuu = async () => {
    try {
      setTests("ঊ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani6.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const rii = async () => {
    try {
      setTests("ঋ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani7.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const aea = async () => {
    try {
      setTests("এ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani8.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const oii = async () => {
    try {
      setTests("ঐ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani9.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ouu = async () => {
    try {
      setTests("ও");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani10.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ouuu = async () => {
    try {
      setTests("ঔ");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/banglaAlphabetSound/ani11.mp3")
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
        require("../../assets/banglaAlphabetSound/banglaVowelBg.mp3")
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
            name={bgMusicEnabled ? "volume-up" : "volume-off"}
            size={24}
            color="#000" // You can set your preferred color here
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={oo} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/1.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={aa} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/2.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={ee} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/3.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={eee} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/4.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={uu} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/5.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={uuu} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/6.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={rii} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/7.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={aea} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/8.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={oii} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/9.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={ouu} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/10.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={ouuu} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/11.png")}
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    color: "#000",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    width: "85%",
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
