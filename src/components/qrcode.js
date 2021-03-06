/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRcode = () => {
  return (
    <View
      style={[
        { flex: 1 },
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
        { backgroundColor: '#EADDFF', position: 'relative' },
      ]}>
      <View
        style={{
          flex: 64,
          flexDirection: 'column',
          backgroundColor: '#6750A4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, color: 'white' }}>App Name</Text>
      </View>
      <View style={{ flex: 748 }}>
        <View
          style={{
            margin: 50,
            marginBottom: 150,
            marginHorizontal: 25,
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 12,
          }}>
          <View style={{ flex: 360, justifyContent: 'center', alignItems: 'center' }}>
            <QRCode value={'"xmlId": "617eb2fabc0c0e6e6faab19a","pwd": "1455"'} size={200} />
          </View>
          <View
            style={{ flex: 220, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'black' }}>
              Firstname Lastname
            </Text>
            <Text style={{ fontSize: 16, color: 'black', marginTop: 10 }}>
              Present this QR Code before the POS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default QRcode;
