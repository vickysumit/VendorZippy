import React from 'react';
import * as SecureStore from 'expo-secure-store'
import { Text,Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { Alert } from 'react-native';
function Secure(props){



    AsyncStorage.setItem('user',JSON.stringify({name:'sumit',age:'22'}) )
    .catch((error) => console.log('Could not save user info', error));
        async function handle(){
            let context = this;
            try {
               let value = await AsyncStorage.getItem('user');
               if (value != null){
                  // do something 
                  console.log('hoho')
               }
               else {
                  // do something else
                  console.log('hehe')
              }
            } catch (error) {
              // Error retrieving data
            }
        }

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button
                title="tap"
                onPress={()=>handle()}
            />
        </View>
    )

}

export default Secure;