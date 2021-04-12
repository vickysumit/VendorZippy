import React from 'react';
import { render } from 'react-dom';
import { FlatList,View,Text } from "react-native";
import { Card } from "react-native-elements";
import { fetchVendorList } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Component } from 'react';
import { baseUrl } from "../shared/baseUrl";
import { ActivityIndicator } from 'react-native';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const mapStateToProps = state => {
    return {
      vendorlist: state.vendorlist
    }
  }


  const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(registerUser(userToken)),
    fetchVendorList:() => dispatch(fetchVendorList())
})


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class FlatListPage extends Component
{

    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this); 
    }
    componentDidMount(){
        setTimeout( ()=>{

            this.props.fetchVendorList(); 
            
        },1000)
       
    }
    handleClick(){
        Alert.alert('hello');
    }
    render(){
      
        console.log(DATA);

        const renderItem = ({item}) => {
            return(
         <TouchableOpacity key={item._id} onPress={() => {
            this.props.navigation.navigate('Afterflatlist', {
              vendorId: item._id,
              name:item.name,
              menu:item.menu
            });
          }}>
            <Card  >
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri:baseUrl + item.image}}>

            </Card.Image>
           </Card>
         </TouchableOpacity>

                
 
            )
        }
        if(this.props.vendorlist.isLoading)
        {
            return(

                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <ActivityIndicator size="large" color="blue"/>
                     <Text>Loading</Text>
                </View>
            )
        }
        else{
            return(
                <FlatList
                    data={this.props.vendorlist.vendors}
                    renderItem={renderItem}
                    keyExtractor={item => item._id.toString()}
        
                />
            )
        }

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(FlatListPage);