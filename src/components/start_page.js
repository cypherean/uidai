/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import {
   Text,
   View,
   Image,
   TextInput,
   Button,
   Alert,
   TouchableOpacity,
   LogBox,
 } from 'react-native';
 import { Icon } from 'react-native-elements'
 import { textAlign } from '@mui/system';
 import axios from 'axios';
 
 
 
 const App = () => {
   var base64enc = "";
   var txnid = "";
  function capgen = () => axios.get('http:/localhost:5000/captcha').then(resp => {
    if(resp.data.status == "Success")
    {
    base64enc = resp.data.captchaBase64String;
    txnid = resp.data.captchaTxnId;
    }
    else
    {
      //Error Alert daaldo yahan
    }
});
   return (
     <View style={[{ flex: 1 }, {
       // Try setting `flexDirection` to `"row"`.
       flexDirection: "column"
     }, { backgroundColor: '#4F378B', position: "relative", alignItems: 'center', justifyContent: 'center' }]}>
       <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
         <View style={{ flex: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
           <View style={{ flex: 20, padding: 10, }}>
             <Image source={require('../assets/Logo.png)} />
           </View>
           <View style={{ flex: 80 }}>
 
           </View>
         </View>
         <View style={{ flex: 90, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
           <TouchableOpacity
             style={{
               width: 205,
               backgroundColor: 'white',
               borderRadius: 100,
               height: 40,
               margin: 20,
             }}>
             <View
               style={{
                 flex: 1,
                 alignItems: 'center',
                 justifyContent: 'center',
               }}>
               <Text style={{ color: '#4F378B', fontSize: 18, }}>New User</Text>
             </View>
           </TouchableOpacity>
           <View style={{borderBottomWidth: 1, borderBottomColor: 'white', width: 200,}}>
 
           </View>
           <TouchableOpacity
             style={{
               width: 205,
               backgroundColor: '#4F378B',
               borderWidth: 2,
               borderColor: 'white',
               borderRadius: 100,
               height: 40,
               margin: 20,
             }}>
             <View
               style={{
                 flex: 1,
                 alignItems: 'center',
                 justifyContent: 'center',
               }}>
               <Text style={{ color: 'white', fontSize: 18, }}>Existing User</Text>
             </View>
           </TouchableOpacity>
         </View>
       </View>
       <View style={{ flex: 1 }}>
         <View style={{ width: 500, height: 500, borderRadius: 250, backgroundColor: 'white', position: 'relative', }}></View>
       </View>
     </View>
   )
 }
 export default App;