import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './aadhar.js'
import QRcode from './qrcode.js'
import About from './verificationCode.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Verification" initial = {true} />
         <Scene key = "about" component = {About} title = "Verification" />
         <Scene key = "qrcode" component = {QRcode} title = "QR Code" />
      </Scene>
   </Router>
)
export default Routes