import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Abc() {
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

  const playSoundL = async () => {
    try {
      setTests("L for Lion");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/l.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundM = async () => {
    try {
      setTests("M for Mango");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/m.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundN = async () => {
    try {
      setTests("N for Nest");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/n.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundO = async () => {
    try {
      setTests("O for Orange");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/o.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundP = async () => {
    try {
      setTests("P for Penguin");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/p.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundQ = async () => {
    try {
      setTests("Q for Queen");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/q.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundR = async () => {
    try {
      setTests("R for Rat");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/r.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundS = async () => {
    try {
      setTests("S for Snake");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/s.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundT = async () => {
    try {
      setTests("T for Train");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/t.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundU = async () => {
    try {
      setTests("U for Umbrella");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/u.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundV = async () => {
    try {
      setTests("V for Van");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/v.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundW = async () => {
    try {
      setTests("W for Watch");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/w.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundX = async () => {
    try {
      setTests("X for X-ray Fish");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/x.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundY = async () => {
    try {
      setTests("Y for Yak");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/y.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playSoundZ = async () => {
    try {
      setTests("Z for Zebra");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/ABC_Audio/z.mp3")
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
              source={require("../../assets/AbcAllAlphabet/aa.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundB} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/b.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundC} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/ca.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundD} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/dd.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundE} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/e.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundF} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/f.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundG} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/g.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundH} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/h.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundI} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/i.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundJ} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/jj.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundK} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/k.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundL} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/ll.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundM} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/mm.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundN} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/n.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundO} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/o.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundP} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/pp.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundQ} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/qq.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundR} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/r.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundS} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/s.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundT} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/tt.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundU} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/u.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundV} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/v.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundW} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/w.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundX} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/x.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundY} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/yy.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSoundZ} style={styles.imageWrapper}>
            <Image
              source={require("../../assets/AbcAllAlphabet/z.jpg")}
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
