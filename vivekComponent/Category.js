import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
class Category extends Component{
    
    render(){
        
        return(
            <View>
                <ScrollView>
               
                    <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent']}
          style={styles.linearGradient}
        >
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        marginTop:15
                    }}>
           <Text style={{fontSize:30}}>Categories </Text></View>
           <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'40%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
            
                      <Text style={{fontSize:20, textAlign:'center',fontStyle:'italic',color:'red'}}>  + Add New</Text>
           </View>
           </LinearGradient>
             <View style={{
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        backgroundColor:'lightyellow',
                        width:'97%',
                        padding:10,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                     <View style={{
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        backgroundColor:'#A0CFEC',
                        width:'100%',
                        paddingLeft:10,
                        paddingTop:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <Text style={{fontSize:25}}>Pizza</Text></View>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Veg Pizza</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Paneer Pizza</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Onion Pizza</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Tomato Pizza</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Capsicum Pizza</Text>

             </View>


             <View style={{
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        backgroundColor:'lightyellow',
                        width:'97%',
                        padding:10,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                     <View style={{
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        backgroundColor:'#A0CFEC',
                        width:'100%',
                        paddingLeft:10,
                        paddingTop:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <Text style={{fontSize:25}}>Burger</Text></View>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Veg Burger</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Paneer Burger</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Allo Tikki Burger</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Pzzta Burger</Text>
                    <Text style={{fontSize:20, paddingLeft:20, color:'gray'}}>~ Nasty Burger</Text>

             </View>

                </ScrollView>
                </View>




)
}
}



const styles = StyleSheet.create({
    
    linearGradient: {
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#9fe496',
        width:'100%',
        padding:15,
        paddingLeft:30,
        paddingBottom:15,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:20 
      
    },
  })


export default Category;