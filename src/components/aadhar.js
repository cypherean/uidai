import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';

const Home = () => {
  var base64enc = "";
  var txnid = "";
  const goToAbout = () => {
    Actions.about();
  };
  axios.get('http://webcode.me').then(resp => {
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
  state = {text: ''};
  base64enc = "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";
  // updateState = () => this.setState({id: 'The state is updated'});
  return (
    <Formik
      initialValues={{aadhar: '', captcha: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
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
            {/* <Text
              style={{
                fontSize: 22,
                paddingLeft: 18,
                color: 'black',
              }}>
              Enter UIDAI/VID Number
            </Text> */}
          </View>
          <View
            style={{
              flex: 320,
              alignItems: 'center',
            }}>
            <Image source={require('../assets/biometric.png')} />
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
                color: "black",
                fontSize: 20,
              }}
              placeholder="12-Digit AADHAR / 16-Digit VID"
              placeholderTextColor="black"
              keyboardType="numeric"
              onChangeText={handleChange('aadhar')}
              onBlur={handleBlur('aadhar')}
              value={values.aadhar}
            />
          </View>
          <View
            style={{
              flex: 200,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <View style={{flex: 3}}>
              <Image style={{width: 90, height: 25}} source={{uri: 'data:image/png;base64,'+base64enc}} />
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
                color: "black",
                fontSize: 20,
              }}
              placeholder="Captcha"
              placeholderTextColor="black"
              onChangeText={handleChange('captcha')}
              onBlur={handleBlur('captcha')}
              value={values.captcha}
            />
          </View>
            <View style={{width: 320}}>
              <TouchableOpacity
                style={{
                  width: 320,
                  backgroundColor: '#6750A4',
                  borderRadius: 100,
                  height: 40,
                }}
                onPress={goToAbout}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>NEXT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 220,
            }}></View>
        </View>
      )}
    </Formik>
  );

  function next() {
    id = this.state.text;
    if (length(id) > 16) {
      // error msg invalid ID
    }
    console.log(id);
  }
};
export default Home;
