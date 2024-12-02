import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Brrd() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true);
  const bgSound = useRef(null);

  const crow = async () => {
    try {
      setTests("Crow");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/crow.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const crowS = async () => {
    try {
      setTests("Crow");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/crowSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const dove = async () => {
    try {
      setTests("Dove");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/dove.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const doveS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/doveSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const magpie = async () => {
    try {
      setTests("Magpie");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/magpie.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const magpieS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/MagpieSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const duck = async () => {
    try {
      setTests("Duck");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/duck.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const duckS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/duckSund.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const eagle = async () => {
    try {
      setTests("Eagle");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/eagle.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const eagleS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/eagleSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const heron = async () => {
    try {
      setTests("Heron");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/heron.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const heronS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/heronSund.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const hurmming = async () => {
    try {
      setTests("Humming-Bird");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/humming.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const hurmmingS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/HummingBird.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const king = async () => {
    try {
      setTests("Kingfisher");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/kingfisher.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const kingS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/kingFisherSunf.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const martin = async () => {
    try {
      setTests("Martin");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/Martin.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const martinS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/MartinSund.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const myna = async () => {
    try {
      setTests("Myna");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/Myna.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const mynaS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/mynaSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const night = async () => {
    try {
      setTests("Nightingale");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/Nightingale.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const nightS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/NightingaleSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const kook = async () => {
    try {
      setTests("kookaburra");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/kookaburra.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const kookS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/NightingaleSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ostrich = async () => {
    try {
      setTests("Ostrich");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/Ostrich.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ostrichS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/ostrichSnd.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const owl = async () => {
    try {
      setTests("Owl");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/owl.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const owlS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/owlSund.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const spro = async () => {
    try {
      setTests("Sparrow");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/sparrow.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const sproS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/BirdsSound/sparrowSund.wav")
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
        require("../../assets/BirdsSound/bmusic.mp3")
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
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[styles.container, { flexDirection: "row", flexWrap: "wrap" }]}
        >
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={crow} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/crow1.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Crow</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={crowS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={dove} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Dove.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Dove</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={doveS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={magpie} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/doyel.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Magpie</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={magpieS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={duck} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/duck.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Duck</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={duckS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={eagle} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/eagle.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Eagle</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={eagleS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={heron} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Heron.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Heron</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={heronS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={hurmming} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Humming-Bird.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text>Humming-Bird</Text>
            </View>
            <TouchableOpacity onPress={hurmmingS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={king} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/King-Fisher.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text>Kingfisher</Text>
            </View>
            <TouchableOpacity onPress={kingS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={kook} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Kookaburra.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text>Kookaburra</Text>
            </View>
            <TouchableOpacity onPress={kookS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={martin} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Martin.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Martin</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={martinS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={myna} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Myna.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Myna</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={mynaS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={night} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/nightingale.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text>Nightingale</Text>
            </View>
            <TouchableOpacity onPress={nightS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ostrich} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Ostrich.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Ostrich</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ostrichS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={owl} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Owl.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Owl</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={owlS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={spro} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/BirdPic/Sparrow.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text>Sparrow</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={sproS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
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
    marginTop: 55,
    justifyContent: "space-around",
  },

  singleImg: {
    width: "45%",
    marginBottom: 10,
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },

  imageWrapper: {
    width: "40%",
    marginBottom: 1,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
    alignSelf: "center",
  },
});
