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
  const playSoundA = async () => {
    try {
      setTests("A for Apple");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/a.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundB = async () => {
    try {
      setTests("B for Ball");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/b.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundC = async () => {
    try {
      setTests("C for Cat");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/c.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundD = async () => {
    try {
      setTests("D for Duck");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/d.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundE = async () => {
    try {
      setTests("E for Elephant");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/e.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundF = async () => {
    try {
      setTests("F for Fish");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/f.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundG = async () => {
    try {
      setTests("G for Grapes");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/g.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundH = async () => {
    try {
      setTests("H for Hen");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/h.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundI = async () => {
    try {
      setTests("I for Ink");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/i.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundJ = async () => {
    try {
      setTests("J for Juice");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/j.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundK = async () => {
    try {
      setTests("K for Kite");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/k.mp3")
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
        require("../../assets/ABC_Audio/abc.mp3")
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
          <TouchableOpacity onPress={playSoundA} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/1.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundB} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/2.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundC} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/3.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundD} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/4.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundE} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/5.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundF} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/6.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundG} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/7.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundH} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/8.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundI} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/9.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundJ} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/BanglaAlphabetPic/10.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundK} style={styles.imageWrapper}>
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
