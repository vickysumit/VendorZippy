import React from 'react';
import { Alert,Button } from 'react-native';



import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function NewLogin () {
   
    return (
     <View style={styles.container}>
         <View style={styles.header}>
            <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../images/logo.png')} 
            style={styles.logo}
            resizeMode="stretch"
            />
         </View>
         <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.title}>Zippy</Text>
            <Text style={styles.text}>Fast & Easy Way Way To Order</Text>
            <View style={styles.button}>
            <TouchableOpacity style={styles.signIn}     
            >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
            </TouchableOpacity>
            </View>

         </Animatable.View>

     </View>
    );
};

export default NewLogin;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#c71414'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },

  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor:'#c71414'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});