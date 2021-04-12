import React from 'react';
import { Button } from 'react-native';
import { View,Text,StyleSheet,FlatList } from "react-native";
import { CARDDETAILS } from "../shared/caredetails";
function Slip(props)
{
    var total = 20;
    
    const renderOrders = ({item})=>{
        
        
        total = total + (item.price * item.no);
        console.log(total); 
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const renderItem = ({item})=>{
        console.log(item.orders)
        return(
           
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {total}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text    >
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY (09.45)"    
                        />
                    </View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={CARDDETAILS}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
           /> 
           
        </View>
    )
}


export default Slip;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        backgroundColor:'grey',
        padding:10 ,
    },
    f1:{
        flexDirection:'row',
        justifyContent:"space-between",
        
    },
    f2:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:10,
        marginBottom:10
    },
    f4:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    f5:{
        flexDirection:'row',

    }
})