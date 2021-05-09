import React from 'react';
import { connect } from "react-redux";
import { View ,Text,FlatList,Button} from "react-native";
import { Card } from 'react-native-elements';
import { baseUrl } from "../shared/baseUrl";
import AddButton from "./AddButton";
import { Alert } from 'react-native';
import { fetchVendorList,addToCart } from "../redux/ActionCreators";
const mapStateToProps = state => {
    return {
      vendorlist: state.vendorlist,
      cartlist:state.cartlist
    }
  }

 
  const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser:(userToken) => dispatch(registerUser(userToken)),
    fetchVendorList:() => dispatch(fetchVendorList()),
    addToCart:(product)=>dispatch(addToCart(product))
})



function AfterFlat(props){
   const { vendorId, name,menu }  = props.route.params;
    var i=0;
    //console.log(name);
    const vendor = props.vendorlist.vendors.filter((vendor)=>{vendor._id === vendorId})[0]
    
    function cartDispatch(item){
      Alert.alert("Added " + item.itemname + " to your cart")
      props.addToCart(item) 
      // console.log(JSON.stringify( props.cartlist))
      // console.log(JSON.stringify(props.cartlist.item))
     // let v = JSON.stringify(props.cartlist.item)
      // console.log(v.search(item._id));
      // console.log(v);
      //console.log(item._id);
     // console.log(props.cartlist)
      console.log(props.cartlist);
    }

    const renderItem = (props)=>{

      return(
        <Card>
           <Card.Title>{props.item.itemname}</Card.Title>
           <Card.Image source={{uri:baseUrl + props.item.itemimage}}></Card.Image>
           <Card.Divider />
           <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
           <Button
             title='Add'
             onPress={()=>cartDispatch(props.item)}
             />


           </View>
           
        </Card>
      )
    }

    function handleSubmit(){
     
      props.navigation.navigate('CardComponent')
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