import React from "react";
import { View,ImageBackground,Image,Text,StyleSheet } from "react-native";
var bg = require('../images/red.jpg')
function Splash(props)
{
    setTimeout(() => {
        props.navigation.navigate('Login');
    }, 4000);
    return(
        <ImageBackground
            
            source={bg}
            style={{height:'100%',width:'100%',flex:1,justifyContent: 'center', alignItems:'center'}}
            >
        <View >
            <Text style={{fontSize:35,color:'white'}} >Zippy</Text>
        </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        color:'white'
    }
})

export default Splash;