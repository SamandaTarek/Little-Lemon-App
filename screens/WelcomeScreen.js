import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { StyleSheet } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';
const grey = '#333333';
const whitish = '#EDEFEE';

const WelcomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();

  return (
    <ScrollView
      indicatorStyle={'white'}
      horizontal={false}
      style={[
        welcomeStyle.container,
        colorScheme === 'light'
          ? { backgroundColor: whitish }
          : { backgroundColor: grey },
      ]}>
      <Image
        style={welcomeStyle.logo}
        source={require('../img/littleLemonLogo.png')}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={welcomeStyle.textTitle}>
        Your local Mediterranean Bistro
      </Text>
      <Pressable
        style={welcomeStyle.button}
        onPress={() => navigation.navigate('Menu')}
        ><Text style={welcomeStyle.buttonText}> View Menu </Text>
      </Pressable>

      <Text style={welcomeStyle.regular}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual enviroment. We would love
        to hear yoou experience with us!
      </Text>
    </ScrollView>
  );
};

// <ImageBackground
//   style={welcomeStyle.tinyLogo}
//   source={require('./img/small-Logo.png')}
//   accessible={true}
//   accessibilityLabel={'tiny Logo'}
// > <Text style={welcomeStyle.logoText}>
//   Little Lemon
// </Text> </ImageBackground>

// show options
// <Text style={welcomeStyle.regular}>Color Scheme: {colorScheme}</Text>
// <Text style={welcomeStyle.regular}>Window Dimensions</Text>
// <Text style={welcomeStyle.regular}>Height: {window.height}</Text>
// <Text style={welcomeStyle.regular}>Width: {window.width}</Text>
// <Text style={welcomeStyle.regular}>Font scale: {window.fontScale}</Text>

const welcomeStyle = StyleSheet.create({
  container: { flex: 1, padding: 40 },
  tinyLogo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  logo: {
    top: 5,
    height: 300,
    width: 300,
    resizeMode: 'contain',
        alignSelf:'center',

  },
  logoText: {
    left: 100,
    top: 40,
    fontSize: 15,
    color: '#333333',
    textAlign: 'right',
  },
  welcomeTitle: {
    padding: 30,
    fontSize: 34,
    color: '#333333',
    textAlign: 'center',
  },
  textTitle: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: '#333333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regular: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: yellow,
    borderColor: yellow,
    borderWidth: 2,
    borderRadius: 12,
  },
});

export default WelcomeScreen;
