import React, { Component } from 'react';
import Ex2 from "./experi2";
import Ex1 from "./exPeri";
import { connect } from 'react-redux';
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator ,Text} from 'react-native';
import { registerUser } from "../redux/ActionCreators";
import S2 from "./s2";
import Tabs from "../navigation/tabs";
import Dashboard from "./Dashboard";
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }


  const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(registerUser(userToken)),
})

class MainMain extends Component{

    constructor(props){
        super(props);

        
    }

    componentDidMount(){
        setTimeout( async()=>{
            let userToken;
            userToken= null;
        
                try{
                    userToken = await AsyncStorage.getItem('userToken')
                    
                 }catch(e){console.log(e)}
                
              this.props.registerUser(userToken);   
            
        },3000)
    }

    

    render(){


        if(this.props.auth.isLoading){
            return(

                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <ActivityIndicator size="large" color="blue"/>
                     <Text>Loading</Text>
                </View>
            )

        }

        if(this.props.auth.userToken!=null)
        {
            return(
                
                
                <Tabs />
            
            )

        }
        else{
            
           return(
            
                <S2 />    
        )
           }
            
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(MainMain);