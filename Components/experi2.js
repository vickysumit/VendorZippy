import React from 'react';
import { Button } from 'react-native';
import { View,Text } from "react-native";
import { connect } from "react-redux";
import { signOut } from "../redux/ActionCreators";
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }


  const mapDispatchToProps = dispatch => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(),
    signOut:()=>dispatch(signOut())
})


function E2(props){

    function handleLogout(){
        props.signOut();
    }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Welcome Home</Text>
            <Button
                title='LOGOUT'
                onPress={()=>handleLogout()}
            />
        </View>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(E2);