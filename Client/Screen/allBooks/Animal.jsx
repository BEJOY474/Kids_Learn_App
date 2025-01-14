import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Animal() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true);
  const bgSound = useRef(null);

  const cow = async () => {
    try {
      setTests("Cow (গরু)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/cow.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const cowS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/cowSound2.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const cat = async () => {
    try {
      setTests("Cat (বিড়াল)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/cat.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const catS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/catSound.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const dog = async () => {
    try {
      setTests("Dog (কুকুর)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/dog.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const dogS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/dogSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const camal = async () => {
    try {
      setTests("Camel (উট)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/camel.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const camalS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/CAMEL.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const crocodile = async () => {
    try {
      setTests("Crocodile (কুমির)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/crocodile.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const crocodileS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/crocodileSund.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const tiger = async () => {
    try {
      setTests("Tiger (বাঘ)");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/tiger.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const tigerS = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AnimalsSound/TIGER.wav")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

    const lion = async () => {
      try {
        setTests("Lion (সিংহ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/lion.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const lionS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/LionSound.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const elephant = async () => {
      try {
        setTests("Elephant (হাতি)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/elephant.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const elephantS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/elephant1.wav")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const deer = async () => {
      try {
        setTests("Deer (হরিণ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/deer.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const deerS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/deerSound.wav")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const frog = async () => {
      try {
        setTests("Frog (ব্যাঙ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/frog.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const frogS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/frogSound.wav")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const girrf = async () => {
      try {
        setTests("Giraffe (জিরাফ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/girrf.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const girrfS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/grfSnd.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const Goat1 = async () => {
      try {
        setTests("Goat (ছাগল)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/goatVoice.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const Goat1S = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/Goat1.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const rabbit = async () => {
      try {
        setTests("Rabbit (খরগোশ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/rabbit.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const rabbitS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/rabbirSund.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const snake = async () => {
      try {
        setTests("Snake (সাপ)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/snake.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const snakeS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/snkSnd.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const horse = async () => {
        try {
          setTests("Horse (ঘোড়া)");
          const { sound } = await Audio.Sound.createAsync(
            require("../../assets/AnimalsSound/horse.mp3")
          );
          setSound(sound);
          await sound.playAsync();
        } catch (error) {
          console.error(error);
        }
      };
  
      const horseS = async () => {
        try {
          const { sound } = await Audio.Sound.createAsync(
            require("../../assets/AnimalsSound/horseSound.mp3")
          );
          setSound(sound);
          await sound.playAsync();
        } catch (error) {
          console.error(error);
        }
      };

    const zebra = async () => {
      try {
        setTests("Zebra (জেব্রা)");
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/zebra.mp3")
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    const zebraS = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/AnimalsSound/zebraSund.wav")
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
        require("../../assets/AnimalsSound/AnimalBgMusic.mp3")
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
            <TouchableOpacity onPress={cow} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/cow.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Crow</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={cowS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={cat} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/cat.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Cat</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={catS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={dog} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/dog.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Dog</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={dogS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={camal} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/camal.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Camel</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={camalS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={crocodile} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Crocodile.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Crocodile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={crocodileS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={tiger} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/tiger-3d-model-animated.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm}>Tiger</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={tigerS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={lion} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/lion2.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text style={styles.dtlsNm} >Lion</Text>
            </View>
            <TouchableOpacity onPress={lionS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

         <View style={styles.singleImg}>
            <TouchableOpacity onPress={elephant} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/elent.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text style={styles.dtlsNm} > Elephant </Text>
            </View>
            <TouchableOpacity onPress={elephantS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

           <View style={styles.singleImg}>
            <TouchableOpacity onPress={frog} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/frog2.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text style={styles.dtlsNm} >Frog</Text>
            </View>
            <TouchableOpacity onPress={frogS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={girrf} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Giraffe.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm} >Giraffe</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={girrfS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={Goat1} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/goat.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm} >Goat</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Goat1S} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={horse} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Hourse.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: "center", top: -20 }}>
              <Text style={styles.dtlsNm} >Hourse</Text>
            </View>
            <TouchableOpacity onPress={horseS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={rabbit} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Rabbit2.png")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm} >Rabbit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={rabbitS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={snake} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Snake.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm} >Snake</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={snakeS} style={styles.imageWrapper}>
              <Icon
                name="volume-up"
                size={28}
                color="#000" // You can set your preferred color here
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={zebra} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AnimalsPic/Zebra.jpeg")}
                style={styles.image}
              />
              <View style={{ alignSelf: "center", top: -20 }}>
                <Text style={styles.dtlsNm} >Zebra</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={zebraS} style={styles.imageWrapper}>
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
    paddingBottom: "30%",
  },

  singleImg: {
    width: "45%",
    marginBottom: 10,
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },

  dtlsNm: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginTop: 10,
    top: 13,
  },

  imageWrapper: {
    width: "100%",
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
