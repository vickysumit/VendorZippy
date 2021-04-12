import React, { useEffect } from 'react';
import { Alert,Button } from 'react-native';
import Dashboard from './Dashboard';
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


import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    TextInput,
    
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';

function S2 (props){

    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');

    function handleLogin(){
        props.signIn(username,password);
    }


    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isAuthenticated: false
    });




    // const [isLoading,setIsLoading] = React.useState(true);

    // function textInputChange(val){
    //     if(val.length == 0){
    //         setData({
    //             ...data,
    //             username:val,
    //             check_textInputChange:false
    //         })
    //     }
    //     else{
    //         setData({
    //             ...data,
    //             username:val,
    //             check_textInputChange:true
    //         })
    //     }
    // }
//     function handlePassword(val){
//         setData({
//             ...data,
//             password:val,
//         })
// }

function submitLogin(){
    if(data.username=='' && data.password=='')
    {
        Alert.alert('fill all');
    }
    else{
        fetch('http://192.168.43.241:3000/users/login', {
            method: 'POST',
            headers: { 
                'Content-Type':'application/json' 
            },
            body: JSON.stringify({username:data.username,password:data.password})
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                
                console.log('nicely',response)
            }
            else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => {console.log(error.message)})
    }
}

function updateSecureTextEntry(){
    setData({
        ...data,
        secureTextEntry:!data.secureTextEntry
    })
}


// useEffect(()=>{
//     setTimeout(()=>{
//        setIsLoading(false); 
//     },4000)
// })


// if(isLoading)
// return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <ActivityIndicator size="large" color="#0000ff"/>

//     </View>
// )
   
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>User Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        value={username}
                        onChangeText={setUsername}
                    />
                    
                    {
                    data.check_textInputChange ? 
                    <Animatable.View
                        animation='bounceIn'
                    >
                            <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                    </Animatable.View>  

                    : null}

                </View>
                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        value={password}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={setPassword}
                    />

                {data.secureTextEntry ?                    
                    <Feather
                        name="eye"
                        color="grey"
                        size={20}
                        onPress={()=>updateSecureTextEntry()}
                    />
                    : 
                    <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                    onPress={()=>updateSecureTextEntry()}
                />
                }
                </View>
                <TouchableOpacity style={{margin:10,backgroundColor:'#c71414'}} 
                onPress={()=>handleLogin()}    
                >
                <Text style={{color:'white',fontSize:23}}>Login</Text>
            
            </TouchableOpacity>
            </View>
        </View>
        
    )

            
     
}
export default connect(mapStateToProps,mapDispatchToProps)(S2);

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#c71414'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });