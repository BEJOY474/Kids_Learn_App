import { Video } from "expo-av";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

export default function Rhymes({ route }) {
  const r1 = require("../../assets/RhymesVideoFile/Twinkle.mp4");
  const r2 = require("../../assets/RhymesVideoFile/baaBaa.mp4");
  const r3 = require("../../assets/RhymesVideoFile/bismillah.mp4");
  const r4 = require("../../assets/RhymesVideoFile/Ding.mp4");
  const r5 = require("../../assets/RhymesVideoFile/Humty.mp4");
  const r6 = require("../../assets/RhymesVideoFile/johny.mp4");
  const r7 = require("../../assets/RhymesVideoFile/Mother.mp4");
  const r8 = require("../../assets/RhymesVideoFile/MyShoe.mp4");
  const r9 = require("../../assets/RhymesVideoFile/pussyCat.mp4");
  const r10 = require("../../assets/RhymesVideoFile/rainRain.mp4");

  const { serial, text, details } = route.params; // Access the passed parameters
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
    <View>
     
        <Video
          ref={videoRef}
          source={
            serial === 1
              ? r1
              : serial === 2
              ? r2
              : serial === 3
              ? r3
              : serial === 4
              ? r4
              : serial === 5
              ? r5
              : serial === 6
              ? r6
              : serial === 7
              ? r7
              : serial === 8
              ? r8
              : serial === 9
              ? r9
              : r10
          }
          style={styles.video}
          isLooping
          resizeMode="stretch"
          shouldPlay
        />
         <ScrollView style={{marginBottom: "49%"}}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.textDtls}>{details}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "30%",
  },
  nonTouchableContainer: {
    pointerEvents: "none",
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  textDtls: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    lineHeight: 30,
  },
});
