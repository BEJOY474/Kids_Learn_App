import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Details = ({ item }) => {
  return (
    <View style={styles.container}>
     
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
   
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 15,
       resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    comment: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
      textAlign: 'justify',
    },
  });

export default Details;
