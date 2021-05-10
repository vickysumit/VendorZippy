// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./SplashScreen";
import Login from "../screens/Login";
import Signup from "../screens/SignUp";
import  DrawerContent  from "./DrawerContent";
import VendorNew from "./VendorNew";
import { createDrawerNavigator } from '@react-navigation/drawer';

const vendorNewNavigator = ()=>{
    const stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
              title: 'ZIPPY',
              headerLeft: () => (
                <Icon name="reorder" size={24} 
                  color= 'white'
                  onPress={ () => navigation.toggleDrawer() } />
              ),
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            >
                <Screen.stack name="vendornew" component={VendorNew} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// const vendorNewNavigator = ()=>{
//     const stack = createStackNavigator();
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Screen.stack name="vendornew" component={VendorNew} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }


function Main () {
  var [isAuthenticated,setIsAuthenticated] = React.useState(true);
  const Stack = createStackNavigator();
  return (
    isAuthenticated
    ?
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={vendorNewNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;