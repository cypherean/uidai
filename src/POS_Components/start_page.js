/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const start_page = () => {
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
          flex: 120,
          flexDirection: 'column',
          backgroundColor: '#6750A4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, color: 'white' }}>Pramaan POS</Text>
      </View>
      <View style={{ flex: 748, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 50,
              marginBottom: 20,
              marginHorizontal: 25,
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              width: 310
            }}>

            <View style={{ flex: 80, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../POS_assets/QRAuth.png")} />
            </View>
            <View style={{ flex: 20 }}>
              <Text style={{ fontSize: 20, color: 'black', alignSelf: 'center' }}>
                Scan QR Code
              </Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: 'black', width: 200, alignSelf: 'center' }} />
      <View style={{ flex: 748, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            marginBottom: 50,
            marginHorizontal: 25,
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            width: 310
          }}>
          <View style={{ flex: 80, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require("../POS_assets/FaceAuth.png")} />
          </View>
          <View style={{ flex: 20 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>
              Scan Face ID
            </Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default start_page;
