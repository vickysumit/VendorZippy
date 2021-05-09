import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { registerUser } from "../redux/ActionCreators";
import Login from "./LoginComponent";
import NewLogin from "./NewLogin";
import Onboarding from "./OnboardingScreen";
import  DrawerContent  from "./DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from "react-native-elements";
import S2 from "./s2";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import OrderDelivery from "../screens/OrderDelivery";
import Tabs from "../navigation/tabs";
import { ActivityIndicator,View ,Text} from "react-native";
import SplashScreen2 from "./SplashScreen2";
import MainMain from "./MainMainComponent";
import FlatListCompo from "./FlatList";
import AfterFlat from "./AfterFlatlist";
import CardComponent from "./CartComponent";
import SignInScreenDeba from "./prac";
import Slip from "./Slip";
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(registerUser(userToken)),
})

const MenuNavigator = ({navigation}) => {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator initialRouteName="FlatlistCompo" screenOptions={{
        title: 'Home',
        headerLeft: () => (
          <Icon name="menu" size={24} 
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
      }}>
      <Stack.Screen name="FlatlistCompo" component={FlatListCompo} />
      <Stack.Screen name="Afterflatlist" component={AfterFlat} />
      </Stack.Navigator>
    )
  }

  const SlipNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="Slip" component={Slip}  options={{
        title: 'Slip',
        headerLeft: () => (
          <Icon name="menu" size={24} 
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
      }} />
      </Stack.Navigator>
    )
  }
  

  
class Main extends Component {
    constructor(props) {
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
        const Stack = createStackNavigator();
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
            const Drawer = createDrawerNavigator();
            return(
                
                
                <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                  <Drawer.Screen name="Home" component={MenuNavigator} />
                  <Drawer.Screen name="Slip" component={SlipNavigator} />
                </Drawer.Navigator>
              </NavigationContainer>
            
            )

        }
        else{
            
            return(
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={Onboarding}>
                    <Stack.Screen name="SignInScreenDeba" component={SignInScreenDeba} options={{headerShown:false}} />
 
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
                    

                    <Stack.Screen name="CardComponent" component={CardComponent} />
   
    
                    <Stack.Screen name="Home" component={Tabs} />
                        
                        <Stack.Screen name="Restaurant" component={Restaurant} />
                        <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> 
                        <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{headerShown:false}} />   
                                 
                    </Stack.Navigator>
                </NavigationContainer>
            )
           }
       
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Main);