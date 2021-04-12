import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { MENU } from '../shared/menu';
import { Card } from 'react-native-elements'

const renderMenu = ({item}) => {
    
    return(
        <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.Image source={{uri:item.image}}></Card.Image>
        <Card.FeaturedSubtitle>{item.rating}</Card.FeaturedSubtitle>
        </Card>
    )
   
}

function Home(props){
    return(
        <SafeAreaView>
            <FlatList
                data={MENU}
                renderItem={renderMenu}
                keyExtractor={item=>item.id.toString()}
            />
            
        </SafeAreaView>
    )
}

export default Home;