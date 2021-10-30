/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   Text,
   View,
   Image,
   TextInput,
   Button,
   Alert,
   TouchableOpacity,
 } from 'react-native';
 
 
 
 const App = () => {
   return (
     <View style={[{flex: 1}, {
       // Try setting `flexDirection` to `"row"`.
       flexDirection: "column"
     }, {backgroundColor: 'white', position: "relative",}]}>
     <View
       style={{
         flex: 64,
         justifyContent: 'center',
       }}>
       <Text style={{
         fontSize: 22,
         paddingLeft: 18,
         color: 'black',
       }}>Enter UIDAI/VID Number</Text>
     </View>
     <View style={{
       flex: 300,
       alignItems: 'center',
     }}>
       <Image source{...require('./Frame.png')} />
     </View>
     <View style={{
       flex: 88,
       alignItems: 'center',
       justifyContent: 'center',
     }}>
       <TextInput style={{
         height: 56,
         width: 320,
         borderBottomWidth: 1,
         backgroundColor: '#C1C1C1',
         opacity: 0.5,
         placeholder: "12-Digit AADHAR number / 16-Digit VID number"
       }}
       placeholder="12-Digit AADHAR / 16-Digit VID"
       placeholderTextColor="black"
       keyboardType="numeric">
 
       </TextInput>
     </View>
     <View style={{
       flex: 72,
       alignItems: 'center',
       justifyContent: 'center',
     }}>
       <View style={{width: 320,}}>
       <TouchableOpacity style={{
         width: 320,
         backgroundColor: "#6750A4",
         borderRadius: 100,
         height: 40,
       }}><View style={{flex: 1, alignItems: "center", justifyContent: "center", }}><Text>NEXT</Text></View></TouchableOpacity>
       </View>
     </View>
     <View style={{
       flex: 348,
     }}>
 
     </View>
     </View>
   )
 }
 export default App;