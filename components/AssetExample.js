import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const grey ='#333333';
const whitish = '#EDEFEE';
const simon = '#EE9972';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyle.container}>
      <Text
        style={footerStyle.footerTitle}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: simon,
    marginBottom: 12
  },
  footerTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  }
});