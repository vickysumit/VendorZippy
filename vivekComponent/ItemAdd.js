import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text,StyleSheet, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
class ItemAdd extends Component{
    
    render(){
        
        return(
            <View>
                <ScrollView>
               
                    <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent']}
          style={styles.linearGradient}
        >
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        marginTop:15
                    }}>
           <Text style={{fontSize:30}}>Add Items </Text></View>
           <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'40%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
            
                      <Text style={{fontSize:20, textAlign:'center',fontStyle:'italic',color:'red'}}>  Select Category</Text>
           </View>
           </LinearGradient>

           


<View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                       <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Name</Text>
                       <TextInput
          placeholder="Enter name here "
          placeholderTextColor="#60605e"
          
          
        />
                    </View>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:12,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                        <View style={{flexDirection:'column', justifyContent:'center' }}>
                        <Text style={{fontSize:20,color:'blue'}}>Description</Text>
                        <TextInput
          placeholder="Enter description here "
          placeholderTextColor="#60605e"
          underlineColorAndroid="transparent"
          multiline={true}
        />
                    </View>
                    </View>
                    </View>
<Card>
                   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Quantity</Text>
                       <TextInput
                         placeholder="half/ full/ count "
                        placeholderTextColor="#60605e"
          
          
                    />
                   </View>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:10,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
   <View style={{flexDirection:'column', justifyContent:'center' }}>
   <Text style={{fontSize:20,color:'blue'}}>Price</Text>
   <TextInput
placeholder="Enter price here "
placeholderTextColor="#60605e"
keyboardType={'numeric'}


/>
</View>
</View>

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>Packing</Text>
    <TextInput
placeholder="Packing price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>GST</Text>
    <TextInput
placeholder="Enter GST price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
</View>
   
   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Total</Text>
                       <TextInput
                         placeholder="amount in Ruppee"
                        placeholderTextColor="#60605e"
                        keyboardType={'numeric'}
          
          
                    />
                   </View>
                   </View>
</Card>
<Card>
                   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Quantity</Text>
                       <TextInput
                         placeholder="half/ full/ count "
                        placeholderTextColor="#60605e"
          
          
                    />
                   </View>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:10,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
   <View style={{flexDirection:'column', justifyContent:'center' }}>
   <Text style={{fontSize:20,color:'blue'}}>Price</Text>
   <TextInput
placeholder="Enter price here "
placeholderTextColor="#60605e"
keyboardType={'numeric'}


/>
</View>
</View>

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>Packing</Text>
    <TextInput
placeholder="Packing price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>GST</Text>
    <TextInput
placeholder="Enter GST price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
</View>
   
   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Total</Text>
                       <TextInput
                         placeholder="amount in Ruppee"
                        placeholderTextColor="#60605e"
                        keyboardType={'numeric'}
          
          
                    />
                   </View>
                   </View>
</Card>
<Card>
                   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Quantity</Text>
                       <TextInput
                         placeholder="half/ full/ count "
                        placeholderTextColor="#60605e"
          
          
                    />
                   </View>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:10,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
   <View style={{flexDirection:'column', justifyContent:'center' }}>
   <Text style={{fontSize:20,color:'blue'}}>Price</Text>
   <TextInput
placeholder="Enter price here "
placeholderTextColor="#60605e"
keyboardType={'numeric'}


/>
</View>
</View>

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>Packing</Text>
    <TextInput
placeholder="Packing price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'30%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <Text style={{fontSize:20,color:'blue'}}>GST</Text>
    <TextInput
placeholder="Enter GST price "
placeholderTextColor="#60605e"
keyboardType={'numeric'}
/>
</View>
</View>
</View>
   
   <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <Text style={{fontSize:20,color:'blue'}}>Total</Text>
                       <TextInput
                         placeholder="amount in Ruppee"
                        placeholderTextColor="#60605e"
                        keyboardType={'numeric'}
          
          
                    />
                   </View>
                   </View>
</Card>
<View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'45%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="logout" size={18} />  
                      <Text color='#fff'>  Submit</Text>
                    </View>


                </ScrollView>
                </View>




)
}
}



const styles = StyleSheet.create({
    
    linearGradient: {
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#9fe496',
        width:'100%',
        padding:15,
        paddingLeft:30,
        paddingBottom:15,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:20 
      
    },
  })


export default ItemAdd;