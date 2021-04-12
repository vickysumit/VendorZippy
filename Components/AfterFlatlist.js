import React from 'react';
import { connect } from "react-redux";
import { View ,Text,FlatList,Button} from "react-native";
import { Card } from 'react-native-elements';
import { baseUrl } from "../shared/baseUrl";
import AddButton from "./AddButton";
import { Alert } from 'react-native';
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



function AfterFlat(props){
   const { vendorId, name,menu }  = props.route.params;
    var i=0;
    //console.log(name);
    const vendor = props.vendorlist.vendors.filter((vendor)=>{vendor._id === vendorId})[0]
    const renderItem = ({item})=>{
      return(
        <Card>
           <Card.Title>{item.itemname}</Card.Title>
           <Card.Image source={{uri:baseUrl + item.itemimage}}></Card.Image>
           <Card.Divider />
           <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
             <AddButton  />
           </View>
           
        </Card>
      )
    }

    function handleSubmit(){
      Alert.alert('hhel')
    }

    return(
      <View style={{flex:1,justifyContent:'space-between'}}>
        <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        />

        <Button
        title="Order"
        onPress={()=>handleSubmit()}
        />
      </View>
      
    )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(AfterFlat);