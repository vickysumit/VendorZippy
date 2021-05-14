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
import VAboutUs from "../vivekComponent/AboutUs";
import VAccount from "../vivekComponent/Account";
import VBankdetails from "../vivekComponent/BankDetails";
import VContactus from "../vivekComponent/ContactUs";
import VFaq from "../vivekComponent/Faq";
import VProfile from "../vivekComponent/Profile";
import VHome from "../vivekScreens/HomeScreen";
import MT from "../vivekScreens/MainTabScreen";
import Vsignup from "../vivekScreens/SignUp";
import Vsplash from "../vivekComponent/SplashScreen";
import Settings from "../vivekComponent/SettingScreen";
import VvenderNew from "../vivekComponent/VendorNew";
import Rating from "../vivekComponent/overAllrating";
import Discount from "../vivekComponent/Discount";
import Pdiscount from "../vivekComponent/PerDiscount";
import Suggest from "../vivekComponent/Suggestion";
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(registerUser(userToken)),
})

const HomeNavigator = ({navigation}) => {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator initialRouteName="VHome" screenOptions={{
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
      <Stack.Screen name="VHome" component={MT} />
      </Stack.Navigator>
    )
  }
  const SettingNavigator = ({navigation}) => {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator initialRouteName="setting" screenOptions={{
        title: 'Settings',
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
      <Stack.Screen name="setting" component={Settings} />
      </Stack.Navigator>
    )
  }

  const AboutUsNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="aboutus" component={VAboutUs}  options={{
        title: 'About Us',
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

  const ContactUsNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="contactus" component={VContactus}  options={{
        title: 'Contact Us',
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

  const ProfileNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="profile" component={VProfile}  options={{
        title: 'Profile',
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

  const FaqNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="faq" component={VFaq}  options={{
        title: 'FAQ',
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
  
  const RatingNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="rating" component={Rating}  options={{
        title: 'Rating',
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

  const BankNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="bank" component={VBankdetails}  options={{
        title: 'Bank Details',
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
  const SuggestNavigator = ({navigation})=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator >
            <Stack.Screen name="suggest" component={Suggest}  options={{
        title: 'Suggestions',
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
                <Drawer.Navigator initialRouteName="Vvendornew" drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Vvendornew" component={VvenderNew} />
                  <Drawer.Screen name="Home" component={HomeNavigator} />
                  <Drawer.Screen name="bank" component={BankNavigator} />
                  <Drawer.Screen name="profile" component={ProfileNavigator} />
                  <Drawer.Screen name="rating" component={RatingNavigator} />
                  <Drawer.Screen name="faq" component={FaqNavigator} />
                  <Drawer.Screen name="setting" component={SettingNavigator} />
                  <Drawer.Screen name="suggest" component={SuggestNavigator} />
                  <Drawer.Screen name="aboutus" component={AboutUsNavigator} />
                  <Drawer.Screen name="contactus" component={ContactUsNavigator} />
                  
                </Drawer.Navigator>
              </NavigationContainer>
            
            )

        }
        else{
            
            return(
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={Onboarding}>
                    <Stack.Screen name="VSplash" component={Vsplash} options={{headerShown:false}} />
                    <Stack.Screen name="SignInScreenDeba" component={SignInScreenDeba} options={{headerShown:false}} />
                    <Stack.Screen name="VSignUpScreen" component={Vsignup} options={{headerShown:false}} />
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