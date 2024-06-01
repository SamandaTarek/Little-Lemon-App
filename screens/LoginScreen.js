import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import React, { useState } from 'react';

const whitish = '#EDEFEE';
const yellow = '#F4CE14';

const LoginScreen =  ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [showLogged, setShowLogged] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {showLogged && <Text style={styles.headerText}>You are logged in!</Text>}

      {!showLogged && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            keyboardType={'email-address'}
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="password"
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#333333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: whitish,
    backgroundColor: whitish,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 32,
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

export default LoginScreen;
