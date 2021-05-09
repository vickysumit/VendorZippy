import React from 'react';
import { connect } from "react-redux";

import { FlatList ,Text,View} from "react-native";
import { Card } from "react-native-elements";

import { exp } from 'react-native-reanimated';

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

function CardComponent(props){

    const renderItem = ({item})=>{
        return(
            <Card>
                <Card.Title>{item.itemname}</Card.Title>
                <Text>Quantity : {item.quantity}</Text>
            </Card>
        )
    }
    return(
        <FlatList
            data={props.cartlist}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
        />
       
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CardComponent)