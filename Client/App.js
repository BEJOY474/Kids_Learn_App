import "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";

import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screen/HomeScreen";
import UserScreen from "./Screen/UserScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Library from "./Screen/Library";
import Login from "./Login_Logout_Page/Login";
import UpdateProfile from "./Screen/updateProfile/UpdateProfile";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterPage from "./Login_Logout_Page/Register";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import BookManuScreen from "./Screen/BookManuScreen";
import Abc from "./Screen/allBooks/Abc";
import OneTwo from "./Screen/allBooks/OneTwo";
import Bird from "./Screen/allBooks/Bird";
import AlifBaaBook from "./Screen/allBooks/AlifBaaBook";
import BanglaAlphabet from "./Screen/allBooks/BanglaAlphabet";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "#8a39cb",
        borderLeftWidth: 7,
        width: "80%",
        height: 70,
        borderRightColor: "green",
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "700",
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: "#8a39cb",
        borderLeftWidth: 7,
        width: "80%",
        height: 70,
        borderRightColor: "#8a39cb",
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "700",
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
};

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8a39cb" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Kids Learn"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />

      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />

      <Stack.Screen
        name="Edit Profile"
        component={UpdateProfile}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />

      <Stack.Screen
        name="Book Menu"
        component={BookManuScreen}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />

      <Stack.Screen
        name="A B C Book"
        component={Abc}
        options={{
          headerBackVisible: true,
          headerLeft: () => null, // Remove menu icon
        }}
      />

      <Stack.Screen
        name="1 2 3 Book"
        component={OneTwo}
        options={{
          headerBackVisible: true,
          headerLeft: () => null,
        }}
      />

      <Stack.Screen
        name="Birds Book"
        component={Bird}
        options={{
          headerBackVisible: true,
          headerLeft: () => null,
        }}
      />

      <Stack.Screen
        name="Bangla Alphabet"
        component={BanglaAlphabet}
        options={{
          headerBackVisible: true,
          headerLeft: () => null,
        }}
      />

      <Stack.Screen
        name="Alif Baa Book"
        component={AlifBaaBook}
        options={{
          headerBackVisible: true,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Login and Register screens with no menu icon */}
      <Drawer.Screen name="Login" component={Login} options={{}} />
      <Drawer.Screen name="Register" component={RegisterPage} />

      {/* Main screens wrapped in a stack navigator */}
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

const DrawerNavLogin = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main screens wrapped in a stack navigator */}
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Login" component={Login} options={{}} />
      <Drawer.Screen name="Register" component={RegisterPage} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem("isLoggedin");
    console.log(data, "at app.js");
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
    setTimeout(() => {}, 900);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavLogin /> : <DrawerNav />}
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}
