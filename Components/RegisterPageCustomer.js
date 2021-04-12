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

function RegisterCustomer(props) {

    return(
        <View>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
        </View>
    )

}

export default RegisterCustomer;