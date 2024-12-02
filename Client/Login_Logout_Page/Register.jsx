const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} = require("react-native");
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

const { width, height } = Dimensions.get("window");

import { useNavigation } from "@react-navigation/native";
//import styles from "./Style";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Error from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { ActivityIndicator, RadioButton } from "react-native-paper";
import axios from "axios";
import apiUrl from "../IpAddress";

function RegisterPage({ props }) {
  const [name, setName] = useState("");
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const navigation = useNavigation();

  async function handelSubmit() {
    setLoading(true); // Start loading
    const userData = {
      name,
      email,
      mobile,
      password,
    };

    if (nameVerify && emailVerify && mobileVerify && passwordVerify) {
      try {
        const res = await axios.post(
          `${apiUrl}/api/user/register`,
          userData
        );

        Alert.alert("", res.data.message);
        navigation.navigate("Login");
      } catch (err) {
       // Alert.alert("Error", "Registration failed. User already exist!");
        Toast.show({
          type: 'error',
          text1:'Error',
          text2: 'Registration failed. User already exist!',
          visibilityTime: 3000
  
        });
      } finally {
        setLoading(false);
      }
    } else {
     // Alert.alert("All input field is required!");
      Toast.show({
        type: 'error',
        text1:'Error',
        text2: 'All input field is required!',
        visibilityTime: 3000

      });
      setLoading(false); // End loading
    }
  }

  const maintenance =()=>{
    Toast.show({
      type: 'error',
      text1:'Error',
      text2: 'Maintenance is running...',
      visibilityTime: 3000

    });
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmailVerify(true);
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);
    if (/[0-9]{1}[0-9]{10}/.test(mobileVar)) {
      setMobileVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPasswordVerify(true);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
        >
       
          <View style={styles.topImageContainer}>
            <Image
              source={require("../assets/topVector.png")}
              style={styles.topImage}
            />
          </View>
          <View style={styles.helloContainer}>
            <Text style={styles.accountText}>Create Account</Text>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="user-o"
              color="#420475"
              style={styles.smallIcon}
              size={22}
            />
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              onChange={(e) => handleName(e)}
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text style={{ marginLeft: "15%", color: "red" }}>
              Name should be more than 1 character.
            </Text>
          )}

          <View style={styles.inputContainer}>
            <Fontisto
              name="email"
              color="#420475"
              size={22}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={(e) => handleEmail(e)}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{ marginLeft: "15%", color: "red" }}>
              Enter a valid email address.
            </Text>
          )}

          <View style={styles.inputContainer}>
            <FontAwesome
              name="mobile"
              color="#420475"
              size={22}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              onChange={(e) => handleMobile(e)}
              maxLength={11}
              keyboardType="numeric"
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text style={{ marginLeft: "15%", color: "red" }}>
              Phone number should be 11 digits.
            </Text>
          )}

          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              color="#420475"
              size={22}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={(e) => handlePassword(e)}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  style={{ marginRight: -10 }}
                  color={passwordVerify ? "green" : "red"}
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{ marginRight: -10 }}
                  color={passwordVerify ? "green" : "red"}
                  size={23}
                />
              )}
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={{ marginLeft: "15%", color: "red" }}>
              Must include uppercase, lowercase, number, and be 6+ characters.
            </Text>
          )}

          <View style={styles.signinBtnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handelSubmit}
              disabled={loading}
            >
              <Text style={styles.buttonText}>Create </Text>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <AntDesign name="arrowright" size={24} color="#fff" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.createAccountContainer}>
            <Text>Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.bottomText}
            >
              Login
            </Text>
          </View>

          <View style={styles.createAccountContainer}>
            <Text>Or create account using sotial media </Text>
          </View>

          <View style={styles.sotioalMedias}>
            <View style={styles.singleIcon}><FontAwesome5 onPress={maintenance} name="facebook" size={26} color="black" /></View>
            <View style={styles.singleIcon}><Entypo onPress={maintenance} name="twitter-with-circle" size={26} color="black" /></View>
            <View style={styles.singleIcon}><AntDesign onPress={maintenance} name="google" size={24} color="black" /></View>
            
            
          </View>

          <View style={styles.leftVectorContainer}>
            <ImageBackground
              source={require("../assets/bottomVector.png")}
              style={styles.leftVectioImage}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },

  topImageContainer: {},
  topImage: {
    width: "100%",
    height: height * 0.2,
  },
  helloContainer: {},
  accountText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    borderRadius: 20,
    marginHorizontal: "10%",
    elevation: 10,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginVertical: 15,
    alignItems: "center",
  },

  smallIcon: {
    marginRight: 10,
  },

  textInput: {
    flex: 1,
  },

  forgatePassContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 8,
    marginRight: "10%",
  },

  signinBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  loginBtn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#4c669f",
    borderWidth: 1,
    borderColor: "rgba(59, 89, 152, 0.8)",
    flexDirection: "row",
    width: "45%",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  createAccountContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },

  bottomText: {
    textDecorationLine: "underline",
  },

  leftVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  leftVectioImage: {
    height: height * 0.4,
    width: width * 0.5,
  },

  sotioalMedias:{
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'center',
    marginVertical : 10,
    marginBottom: 25,
    zIndex: 1
  },

  singleIcon:{
      width: '16%',
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#fff',
      padding : 15,
      marginHorizontal: 10,
      borderRadius: 50,
      elevation: 10,
      shadowColor: "#333",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
  }
});
