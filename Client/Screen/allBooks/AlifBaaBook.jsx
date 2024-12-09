import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AlifBaaBook() {
  const [sound, setSound] = useState();
  const [texts, setTests] = useState("Hello Kids!");
  const [bgMusicEnabled, setBgMusicEnabled] = useState(true);
  const bgSound = useRef(null);

  const alif = async () => {
    try {
      setTests("Alif");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/001-alif.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const baa = async () => {
    try {
      setTests("Ba");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/ba.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const taa = async () => {
    try {
      setTests("Taa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/003-taa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const cha = async () => {
    try {
        setTests("Sa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/004-tha.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const jim = async () => {
    try {
      setTests("Jeem");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/005-jeem.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const haa = async () => {
    try {
    setTests("Haa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/006-haa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const kho = async () => {
    try {
      setTests("Khaa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/007-khaa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const dal = async () => {
    try {
        setTests("Dal");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/008-dal.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const jal = async () => {
    try {
      setTests("Jaal");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/009-dhal.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ro = async () => {
    try {
        setTests("Raa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/010-raa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const jha = async () => {
    try {
      setTests("Jaa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/011-jaa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const sin = async () => {
    try {
        setTests("Seen");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/012-seen.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const shin = async () => {
    try {
      setTests("Sheen");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/013-sheen.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const swad = async () => {
    try {
        setTests("Saad");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/014-saad.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const dowad = async () => {
    try {
      setTests("Dhaad");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/015-dhaad.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const too = async () => {
    try {
        setTests("Toa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/016-toa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const joo = async () => {
    try {
      setTests("Dhaa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/017-dhaa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ain = async () => {
    try {
        setTests("Ain");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/018-ain.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ghain = async () => {
    try {
        setTests("Ghain");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/019-ghain.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const faa = async () => {
    try {
        setTests("Faa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/020-faa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const qoff = async () => {
    try {
      setTests("Qaaf");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/021-qaaf.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const kaf = async () => {
    try {
        setTests("Kaaf");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/022-kaaf.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const lam = async () => {
    try {
      setTests("Laam");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/023-laam.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const mim = async () => {
    try {
        setTests("Meem");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/024-meem.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const nun = async () => {
    try {
      setTests("Noon");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/025-noon.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const waw = async () => {
    try {
        setTests("Waw");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/026-waw.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ha = async () => {
    try {
      setTests("Ha");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/027-ha.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ham = async () => {
    try {
      setTests("Hamza");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/028-hamza.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const ya = async () => {
    try {
      setTests("Yaa");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/AlifBaSound/029-yaa.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{texts}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[styles.container, { flexDirection: "row", flexWrap: "wrap" }]}
        >
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={baa} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/2.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={alif} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/1.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.singleImg}>
            <TouchableOpacity onPress={cha} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/4.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={taa} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/3.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

        
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={haa} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/6.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.singleImg}>
            <TouchableOpacity onPress={jim} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/5.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

       

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={dal} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/8.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={kho} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/7.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ro} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/10.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={jal}  style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/9.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={sin} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/12.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={jha} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/11.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={swad} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/14.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={shin} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/13.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         


          <View style={styles.singleImg}>
            <TouchableOpacity onPress={too} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/16.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={dowad} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/15.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

      
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ain} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/18.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={joo} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/17.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

      

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={faa} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/20.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ghain} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/19.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         


          <View style={styles.singleImg}>
            <TouchableOpacity onPress={kaf} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/22.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={qoff} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/21.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

         

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={mim} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/24.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={lam} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/23.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

        
          <View style={styles.singleImg}>
            <TouchableOpacity onPress={waw} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/26.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

           <View style={styles.singleImg}>
            <TouchableOpacity onPress={nun} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/25.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ham} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/28.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          {/* onPress={hamza} */}
   
        <View style={styles.singleImg}>
            <TouchableOpacity onPress={ha} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/27.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          

          <View style={styles.singleImg}>
            <TouchableOpacity onPress={ya} style={styles.imageWrapper}>
              <Image
                source={require("../../assets/AlifBaPic/29.jpg")}
                style={styles.image}
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
    paddingBottom:"30%",
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
