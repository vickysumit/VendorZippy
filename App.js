import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Components/LoginComponent";
import Main from "./Components/MainComponent";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/HomeComponent";
import NewLogin from "./Components/NewLogin";
import SignIn from "./Components/SignInComponent";
import S2 from "./Components/s2";
import E3 from "./Components/exPeri";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configurationStore";
import MainMain from "./Components/MainMainComponent";
import Secure from "./Components/Secure";
import Onboarding from "./Components/OnboardingScreen";
import Slip from "./Components/Slip";
import FlatListPage from "./Components/FlatList";
import AddButton from "./Components/AddButton";
import SplashScreen2 from "./Components/SplashScreen2";
import Profile from "./Components/ProfileComponent";
import SignInScreenDeba from "./Components/prac";
import GmailSignup from "./Components/GmailSignupComponent";

import FoodItems from "./Components/Vivek";

const store = ConfigureStore();
export default function App() {
  return (
    <Provider store={store}>
        <Main  />
    </Provider>
  
  );
}

