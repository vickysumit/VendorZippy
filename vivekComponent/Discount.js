import { CheckBox } from 'react-native-elements';
import React, { Component, useState } from 'react';
import { View,TouchableOpacity,Text, Switch} from "react-native";
import { Button } from 'react-native';

const Discount = (props) => {
    
        
        return(
            <View style={{
                alignSelf:'center',
                flexDirection:'column',
                justifyContent:'space-between',
                backgroundColor:'white',
                width:'97%',
                padding:20,
                paddingBottom:22,
                borderRadius:10,
                shadowOpacity:80,
                elevation:15,
                marginTop:20 
            }}>
            <Text style={{fontSize:50}}>Discount</Text>
            
             <View style={{
                alignSelf:'center',
                flexDirection:'column',
                justifyContent:'space-between',
                backgroundColor:'powderblue',
                width:'97%',
                padding:10,
                paddingLeft:30,
                paddingBottom:22,
                borderRadius:10,
                shadowOpacity:80,
                elevation:15,
                marginTop:20 
            }}><Text style={{fontSize:30}}>% <Button
            title="Discount"
            onPress = {()=>props.navigation.navigate()}
            /></Text>
            <Text style={{fontSize:18}}>In this section you can provide how much percent you want to give off on particular item or all items</Text>
            </View>

            <View style={{
                alignSelf:'center',
                flexDirection:'column',
                justifyContent:'space-between',
                backgroundColor:'powderblue',
                width:'97%',
                padding:10,
                paddingLeft:30,
                paddingBottom:22,
                borderRadius:10,
                shadowOpacity:80,
                elevation:15,
                marginTop:20 
            }}><Button
            title="Net Discount"
            onPress = {()=>props.navigation.navigate("firstdiscount")}
            />
            <Text style={{fontSize:18}}>In this section you can provide the amount which you want to give off on particular item or all items</Text>
            </View>
            

            </View>

        )}


export default Discount;