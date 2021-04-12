import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) =>{
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return(
        <View 
           style={{width: 5,
                   height: 5,
                   marginHorizontal: 3,
                   backgroundColor
        }}
        />
    )
}

const Skip = ({...props}) => (
    <Button 
        title='Skip'
        color="#000000"    
        {...props}
    />
);

const Next = ({...props}) => (
    <Button 
        title='Next'
        color="#000000"
        {...props}    
    />
);

const Done = ({...props}) => (
    
    <TouchableOpacity
        style={{marginHorizontal:8}}
        {...props}
    ><Text style={{fontSize: 16}}>Done</Text></TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("SplashScreen2")}
        onDone={() => navigation.navigate("SplashScreen2")}
  pages={[
    {
      backgroundColor: '#8F1600',
      image: <Image source={require('../images/onboarding-img1.jpeg')} />,
      title: 'Zippy',
      subtitle: 'Best way to break up with hunger',
    },
        {
          backgroundColor: '#B32113',
          image: <Image source={require('../images/onboarding-img2.jpeg')} />,
          title: 'Keep you safe',
          subtitle: 'Crowdless pick up point',
        },
        {
            backgroundColor: '#831005',
            image: <Image source={require('../images/onboarding-img3.jpeg')} />,
            title: 'Your choice',
            subtitle: 'Choose your favourite vendor',
          },
  ]}
/>
    );
};


export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});