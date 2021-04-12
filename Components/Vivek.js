import React from 'react';
import { Switch,FlatList } from "react-native";
import { Card } from "react-native-elements";
import { DISHES2 } from "../shared/dishes2";
import { connect } from "react-redux";
import { changeActive,markActive } from "../redux/ActionCreators";
import { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { View,Text } from 'react-native';
const mapStateToProps = state => {
  return {
    vendorlist: state.vendorlist,
    activedish: state.activedish
  }
}

const mapDispatchToProps = (dispatch) => ({
  
  changeActive:()=>dispatch(changeActive()),
  markActive:(id)=>dispatch(markActive(id))
})


class FoodItems extends Component {
    constructor(props){
      super(props);
      this.state = {
        value:false
      }
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      this.props.changeActive();
    }
    
    handleChange(id){
      console.log(id);
      this.props.markActive(id);
      this.props.changeActive();
    }

    render(){
      
      console.log(this.props.activedish.active)
      const renderItem = ({item}) => {
        
        console.log(item.active);
      return (
        <Card key={item._id}>
        <Card.Title>{item.itemname}</Card.Title>
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            
            ios_backgroundColor="#3e3e3e"
            onValueChange={()=>{this.handleChange(item._id)}}
            value={item.active}
          />
        </Card>
                       
      );
    };
    
    if(this.props.activedish.isLoading){
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
            data={this.props.activedish.activedish}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            />
      
     

    
    )
    }
  
    }
    
  
  }

export default connect(mapStateToProps,mapDispatchToProps)(FoodItems);