import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function Vegetable() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true); 
  const bgSound = useRef(null);
  const playSound1 = async () => {
    try {
      setTests("Potato (আলু)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/potato.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound2 = async () => {
    try {
      setTests("Carrot (গাজর)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/carrot.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound3 = async () => {
    try {
      setTests("Been (শিম)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/bean.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound4 = async () => {
    try {
      setTests("Bitter Gourd (করলা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/bitter.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound5 = async () => {
    try {
      setTests("Brinjal (বেগুন)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/brinjal.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound6 = async () => {
    try {
      setTests("Cabbage (বাঁধাকপি)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/cabbage.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound7 = async () => {
    try {
      setTests("Cauliflower (ফুলকপি)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/cauliflower.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound8 = async () => {
    try {
      setTests("Chilli (মরিচ)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/chilli.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound9 = async () => {
    try {
      setTests("Corn (ভুট্টা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/corn.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound10 = async () => {
    try {
      setTests("Cucumber (শসা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/cucumber.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound11 = async () => {
    try {
      setTests("Garlic (রসুন)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/garlic.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound12 = async () => {
    try {
      setTests("Lady's Finger (ঢ্যাঁড়স)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/lFinger.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound13 = async () => {
    try {
      setTests("Pumpkin (কুমড়া)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/pumpkin.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound14 = async () => {
    try {
      setTests("Radish (মূলা)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/radish.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSound15 = async () => {
    try {
      setTests("Tomato (টমেটো)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/VegetableMusic/tomato.mp3")
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
        require("../../assets/VegetableMusic/bGm.mp3")
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
              source={require("../../assets/VegetablePic/potato.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Potato</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound2} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/VegetablePic/carrot.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Carrot</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound3} style={styles.imageWrapper}>
            <Image
                source={require("../../assets/VegetablePic/bean.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Bean</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound4} style={styles.imageWrapper}>
            <Image
               source={require("../../assets/VegetablePic/bitterGourd.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Bitter Gourd</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound5}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/VegetablePic/brinjal.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Brinjal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound6}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/VegetablePic/cabbage.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Cabbage</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound7}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/VegetablePic/cauliflower.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Cauliflower</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound8}
            style={styles.imageWrapper}
          >
            <Image
               source={require("../../assets/VegetablePic/chilli.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Chilli</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound9}
            style={styles.imageWrapper}
          >
            <Image
              source={require("../../assets/VegetablePic/corn.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Corn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound10}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/cucumber.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Cucumber</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound11}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/garlic.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Garlic</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound12}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/ladysFinger.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Lady's Finger</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound13}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/pumpkin.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Pumpkin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound14}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/radish.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Radish</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound15}
            style={styles.imageWrapper}
          >
            <Image
                source={require("../../assets/VegetablePic/tomato.png")}
              style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize:18 }}>Tomato</Text>
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
    borderRadius: 7,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
    
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    padding: 10,
   
  },
});
