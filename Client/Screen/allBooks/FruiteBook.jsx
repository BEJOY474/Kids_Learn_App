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
      setTests("Apple (আপেল)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/apple.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound2 = async () => {
    try {
      setTests("Mango (আম)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/mango.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound3 = async () => {
    try {
      setTests("Orange (কমলা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/orange.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound4 = async () => {
    try {
      setTests("Banana (কলা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/banana.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound5 = async () => {
    try {
      setTests("Grape (আঙ্গুর)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/grape.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound6 = async () => {
    try {
      setTests("Jackfruit (কাঁঠাল)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/jackfruit.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound7 = async () => {
    try {
      setTests("Litchi (লিচু)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/litchi.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound8 = async () => {
    try {
      setTests("Pineapple (আনারস)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/anarosh.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound9 = async () => {
    try {
      setTests("Guava (পেয়ারা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/guava.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound10 = async () => {
    try {
      setTests("Dates (খেজুর)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/FruitsSounds/date.mp3")
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
        require("../../assets/FruitsSounds/frt.mp3")
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
              source={require("../../assets/FruitsPic/apple.jpg")}
              style={styles.image}
            />
              <Text style={{textAlign:'center', fontSize:18 }}>Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound2} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/FruitsPic/mango.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Mango</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound3} style={styles.imageWrapper}>
            <Image
                source={require("../../assets/FruitsPic/Orange.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Orange</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound4} style={styles.imageWrapper}>
            <Image
               source={require("../../assets/FruitsPic/kola.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Banana</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound5}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/FruitsPic/grape.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Grape</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound6}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/FruitsPic/kathal.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Jackfruit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound7}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/FruitsPic/litchi.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Litchi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound8}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/FruitsPic/anarosh.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Pineapple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound9}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../../assets/FruitsPic/Guava.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Guava</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound10}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/FruitsPic/date.jpg")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Dates</Text>
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
    width: "40%",
    marginBottom: 13,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
