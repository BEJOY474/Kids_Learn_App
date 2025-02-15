import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DrawerList = [
  { icon: "home-outline", label: "Home", navigateTo: "Home" },
  { icon: "account-multiple", label: "Profile", navigateTo: "Profile" },
  {  icon: "account-remove", label: "Delete User Account", navigateTo: "Delete User Account" },
  { icon: "bookshelf", label: "Library", navigateTo: "Library" },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((el, i) => (
    <DrawerLayout
      key={i}
      icon={el.icon}
      label={el.label}
      navigateTo={el.navigateTo}
    />
  ));
};

export default function DrawerContent(props) {
 

  const navigation = useNavigation();
  const signOut = async () => {
    AsyncStorage.setItem("isLoggedin", "");
    AsyncStorage.setItem("token", "");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }], // Make sure this matches your Login screen's name
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri:"https://thumbs.dreamstime.com/b/cartoon-children-reading-books-library-everyone-happy-reading-books-cartoon-children-reading-books-library-everyone-324401126.jpg"
                     
                  }}
                  size={50}
                  style={{ marginTop: 5 }}
                />
                <View style={{ marginLeft: 10, flexDirection: "column" }}>
                  <Title style={styles.title}>Kids Learn</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    Educational app for kids
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={signOut}
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,

    borderBottomWidth : 1,
    borderBottomColor: '#3333'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
    width: "100%",
    marginBottom : 5
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
