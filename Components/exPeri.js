import React from 'react';
import { View,Text,TextInput,Button } from "react-native";
import { connect } from "react-redux";

import { signIn } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  const mapDispatchToProps = dispatch => ({
    signIn: (username,password) => dispatch(signIn(username,password)),
})


function E1(props){
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');

    function handleLogin(){
        props.signIn(username,password);
    }

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Enter name</Text>
            <TextInput
                placeholder='Your name'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder='Your password'
                value={password}
                onChangeText={setPassword}
            />  
            <Button 
                title="Login"
                onPress={()=>handleLogin()}
            />          
        </View>
    )
}



    

export default connect(mapStateToProps,mapDispatchToProps)(E1);

