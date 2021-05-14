import React, { Component, useState } from 'react';
import { View,TouchableOpacity,Text, Switch} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";


const SettingScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
        
        return(
            
            <View >
            <View >
                 <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'row', borderRadius:10}}>
                 <View>
                         <TouchableOpacity>
                         <Icon  name="back" size={25}  />
                         
                         </TouchableOpacity>
                         </View>
                         <View>
                         <Text style={{ fontSize:20}} >   Settings</Text>
                         </View>
                         </View>
            </View>
            <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'lightyellow',
                        width:'97%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20 
                    }}>
                      <Text style={{fontSize:25}}>Food Service</Text>
                      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} 
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSwitchOn ? "#f5dd4b" : "#f4f3f4"}
                      />
                    </View>

            <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        backgroundColor:'#fff',
                        width:'97%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20 
                    }}>
                       
                      <Text style={{fontSize:20}}>  Edit Profile</Text>
                    </View>
            
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        backgroundColor:'#fff',
                        width:'97%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20 
                    }}>
                       
                      <Text style={{fontSize:20}}>  History</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        backgroundColor:'#fff',
                        width:'97%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                       
                      <Text style={{fontSize:20}}>  Feedback/Suggestion</Text>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'45%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20

                    }}>
                      <Icon color='red' name="logout" size={18} />  
                      <Text color='#fff'>  LOGOUT</Text>
                    
                    </View>




                    </View>
           
            
           )
       }
   
   

   
   
   export default SettingScreen;


   