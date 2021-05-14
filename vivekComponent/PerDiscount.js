import React, { useState } from "react";
import { StyleSheet, Text, View ,TextInput, CheckBox, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/AntDesign";



const PerDiscount = () => {
    const [checked, setChecked] = React.useState('first');
    const [checkedtwo, setCheckedtwo] = React.useState('new');
    const [isSelected, setSelection] = useState(false);
    return(
      <ScrollView>
        <View style={{
            alignSelf:'center',
            flexDirection:'column',
            justifyContent:'space-between',
            backgroundColor:'white',
            width:'97%',
            padding:20,
            paddingBottom:22,
            borderRadius:10,
            shadowOpacity:80,
            elevation:15,
            marginTop:20 
        }}>
         <Text style={{fontSize:40, backgroundColor:'powderblue'}}>Discount Value</Text>
         <Text style={{fontSize:25, color:'blue'}}>Enter the % of discount you want to give !</Text>
         <TextInput
          placeholder="Enter percentage "
          placeholderTextColor="#60605e"
          numeric
          maxLength={2}  
          keyboardType={'numeric'}
          backgroundColor='#f1e9e7'
        />
        <Text style={{fontSize:25, color:'blue'}}>Discount Eligibility</Text>
        <View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={{fontSize:20}}>All order</Text></View>
      <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={{fontSize:20}}>Above minimum order value</Text>
      </View>
      <TextInput
          placeholder="Enter amount "
          placeholderTextColor="#60605e"
          numeric  
          keyboardType={'numeric'}
          backgroundColor='#f1e9e7'
        />
      
    </View>
    <Text style={{fontSize:25, color:'blue'}}>Who will see the discount?</Text>
    <View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
      <RadioButton
        value="new"
        status={ checked === 'new' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('new')}
      /><Text style={{fontSize:20}}>All Customer</Text></View>
      <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
      <RadioButton
        value="newtwo"
        status={ checkedtwo === 'newtwo' ? 'checkedtwo' : 'uncheckedtwo' }
        onPress={() => setCheckedtwo('newtwo')}
      /><Text style={{fontSize:20}}>New Customer</Text>
      </View>
      <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
      <RadioButton
        value="newthree"
        status={ checkedtwo === 'newthree' ? 'checkedtwo' : 'uncheckedtwo' }
        onPress={() => setCheckedtwo('newthree')}
      /><Text style={{fontSize:20}}>Inactive Customer</Text>
      </View>
      </View>
      <Text style={{fontSize:25, color:'blue'}}>Discount Starting and End Date</Text>


      <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'100%',
                        }}>

<View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}><Text>Start Date</Text></View>

<View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}><Text>End Date</Text></View>
 </View>
      
 <Text style={{fontSize:25, color:'#353935'}}>Week days</Text>
 
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Monday</Text>
        </View>

        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Tuesday</Text>
        </View>

        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Wednesday</Text>
        </View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Thursday</Text>
        </View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Friday</Text>
        </View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Saturday</Text>
        </View>
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'flex-start',
            backgroundColor:'white',
            width:'100%',
           padding:10
        }}>
 <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize:20}}>Sunday</Text>
        </View>
        <Text style={{fontSize:25, color:'blue'}}>Time Slot</Text>

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

        </View>
        </ScrollView>

)}
    
    


export default PerDiscount;