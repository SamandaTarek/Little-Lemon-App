import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
                  How was your visit to Little Lemon?    {' '}
        </Text>
        <Text style={styles.infoSection}>
                  Little Lemon is a charming neighborhood bistro that serves
          simple food and classic cocktails in a lively but casual environment.
          We would love to hear your experience with us!    {' '}
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="First Name"
          onFocus={() => Alert.alert('First name is Focused')}
          onBlur={() => Alert.alert('First name is Blurred')}
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder="Last Name"
          clearButtonMode="always"
          
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder="Please leave feedback"
          multiline={false}
          maxLength={250}
          clearButtonMode="always"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default FeedbackForm;
