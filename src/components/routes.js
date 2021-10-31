import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './aadhar.js';
import QRcode from './qrcode.js';
import SplashScreen from './splash_screen.js';
import About from './verification_code.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="splashscreen"
        component={SplashScreen}
        title=" "
        initial={true}
        tabBarStyle={{
          color: 'purple',
          backgroundColor: 'blue',
        }}
        tabStyle={{
          color: 'purple',
          backgroundColor: 'blue',
        }}
        labelStyle={{
          color: 'purple',
          backgroundColor: 'blue',
        }}
      />
      <Scene key="home" component={Home} title="Enter UIDAI/VID Number"/>
      <Scene key="about" component={About} title="Enter Verification Code" />
      <Scene key="qrcode" component={QRcode} title="Pramaan" />
    </Scene>
  </Router>
);
export default Routes;
