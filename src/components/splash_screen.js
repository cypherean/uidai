/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={[
        { flex: 1 },
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
        {
          backgroundColor: '#4F378B',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/BigLogo.png')} />
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
          Pramaan
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: 500,
            height: 500,
            borderRadius: 250,
            backgroundColor: 'white',
            position: 'relative',
          }}></View>
      </View>
    </View>
  );
};
export default SplashScreen;
