import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Button,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window");

function Login(props) {
  const [username, onChangeUsername] = useState('');
const [password, onChangePass] = useState('');
const [isAuthenticated, onChangeauth] = useState(false);
var url = 'http://localhost:3000/users/login';

function handleLogin(){
if(username=='' || password=='')
{
  Alert.alert("Please provide both username and password");
}

else{
  fetch('http://192.168.43.241:3000/users/login', {
    method: 'POST',
    headers: { 
        'Content-Type':'application/json' 
    },
    body: JSON.stringify({username:username,password:password})
})
.then(response => {
    if (response.ok) {
        return response;
    } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
    },
    error => {
        throw error;
    })
.then(response => response.json())
.then(response => {
    if (response.success) {
        // If login was successful, set the token in local storage
        
        console.log('nicely',response)
    }
    else {
        var error = new Error('Error ' + response.status);
        error.response = response;
        throw error;
    }
})
.catch(error => {console.log(error.message)})
}


}

  return (
    <ImageBackground
      source={require("../images/foodbg.jpg")}
      style={styles.backgroundContainer}
    >
      <View style={styles.logoContainer}>
       
        <Text style={styles.logoText}>Zippy</Text>
      </View>
      <View style={styles.inputContainer}>
       

        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={text => onChangeUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        

        <TextInput
          style={styles.input}
          placeholder={"Password"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={text => onChangePass(text)}
        />
        
      </View>
      <View style={{margin:30}}>
      <Button
        
        title="Login"
        color="red"
        onPress={() => handleLogin()} 
        
        />
      </View>
     
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignContent: "center",
  },
  Logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom:50
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35 )",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    marginBottom:10
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputContainer:{
    marginTop:10
  },
  btnEye:{
    position:'absolute',
    top:8,
    right:37
  }
});

export default Login;
