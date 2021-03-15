import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "./SplashScreen";
import Login from "./LoginComponent";




class Main extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const Stack = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash'>
                    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                    <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />              
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

export default Main;