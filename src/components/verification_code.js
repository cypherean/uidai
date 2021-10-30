import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const About = () => {
  const goToQRcode = () => {
    Actions.qrcode();
  };

  return (
    <View
      style={[
        {flex: 1},
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
        {backgroundColor: 'white', position: 'relative'},
      ]}>
      <View
        style={{
          flex: 64,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 18,
            color: 'black',
          }}>
          Enter Verification Code
        </Text>
      </View>
      <View
        style={{
          flex: 300,
          alignItems: 'center',
        }}>
        <Image source={require('../assets/lockscreen.png')} />
      </View>
      <View
        style={{
          flex: 508,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 76,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', textAlign: 'center'}}>
            Please enter the 6-digit verification code sent to your registered
            mobile number +91 XXXXXX1234
          </Text>
        </View>
        <View
          style={{
            flex: 88,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              height: 56,
              width: 320,
              borderBottomWidth: 1,
              backgroundColor: '#C1C1C1',
              opacity: 0.5,
              placeholder: 'Verification code',
            }}
            placeholderTextColor="black"
            keyboardType="numeric"
            value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
        </View>
        <View style={{flex: 124}}>
          <View style={{flex: 56}}></View>
          <View
            style={{flex: 20, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black'}}>
              Didn’t receive the verification code?
              <Text style={{color: '#6750A4', fontWeight: 'bold'}}>
                {' '}
                Resend code
              </Text>
            </Text>
          </View>
        </View>
        <View style={{flex: 72}}>
          <TouchableOpacity
            style={{
              width: 320,
              backgroundColor: '#6750A4',
              borderRadius: 100,
              height: 40,
            }}
            onPress={goToQRcode}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>NEXT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 236}}></View>
      </View>
    </View>
  );
};
export default About;
