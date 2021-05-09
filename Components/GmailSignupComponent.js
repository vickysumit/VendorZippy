import React from 'react';
import { Alert } from 'react-native';
import { View,Text,TextInput,Button } from 'react-native';
import { connect } from 'react-redux';
import { otp ,gmailVerifyRequest} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
      gmail:state.gmail
    }
  }

  const mapDispatchToProps = dispatch => ({
    signIn: (username,password) => dispatch(signIn(username,password)),
    otp:()=>dispatch(otp()),
    gmailVerifyRequest: (mail)=>dispatch(gmailVerifyRequest(mail))
    
})


function GmailSignup(props){

    var [mail,setMail] = React.useState('');
    var [otpp,setotpp] = React.useState('');
    function handleRequest(){
        props.gmailVerifyRequest(mail);
        props.otp();
    }
    function handleVerify(){
     
      console.log(global.random_num)
      if(global.random_num == otpp){
        Alert.alert("same")
      }
      else{
        Alert.alert("not same")
      }
    }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder="Enter your email" onChangeText={setMail} value={mail}></TextInput>
            
            <Button
              title="Verify"
              onPress = {()=>handleRequest()}
            />
            <TextInput style={{margin:20}} placeholder="enter otp" value={otpp} onChangeText={setotpp}></TextInput>
            <Button
              title="Verify OTP"
              onPress = {()=>handleVerify()}
            />
        </View>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(GmailSignup);