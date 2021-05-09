import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity, Image,Text} from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';
import { Card } from "react-native-elements";


class Profile extends Component{
    render(){
        return(
            <View>
                <ScrollView>
                    <View style={{padding:10,width:'100%',backgroundColor:'#000',height:150}}>
                        <TouchableOpacity>
                        <Icon name="back" size={25} color="white" />
                            <View></View>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                   
                    <Text style={{fontSize:25, fontWeight:"bold", padding:10}}>Vivek Dhiman</Text>
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon name="mail" size={18} />  
                      <Text>  vivek.dhiman098@gmail.com</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Profile;