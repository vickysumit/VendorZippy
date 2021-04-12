import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./LoginComponent";
import NewLogin from "./NewLogin";
import Onboarding from "./OnboardingScreen";
import S2 from "./s2";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import OrderDelivery from "../screens/OrderDelivery";
import Tabs from "../navigation/tabs";

import SplashScreen2 from "./SplashScreen2";
import MainMain from "./MainMainComponent";
import FlatListCompo from "./FlatList";
import AfterFlat from "./AfterFlatlist";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const Stack = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Onboarding}>
                <Stack.Screen name="Flatlist" component={FlatListCompo} />
                
                <Stack.Screen name="Afterflatlist" component={AfterFlat} />
                <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
                <Stack.Screen name="Home" component={Tabs} />
                    
                    <Stack.Screen name="Restaurant" component={Restaurant} />
                    <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> 
                    <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{headerShown:false}} />   
                    <Stack.Screen name="MainMain" component={MainMain} options={{headerShown:false}} />           
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

export default Main;