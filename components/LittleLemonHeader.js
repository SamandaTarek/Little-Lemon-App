import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const simon = '#FBDABB';
const yellow = '#F4CE14';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Image
        style={headerStyle.logo}
        source={require('../img/littleLemonHeader.png')}
      />
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: simon,
  },
  logo: {
    height: 150,
    width: 250,
    left: 50,
    resizeMode: 'contain',
  },
  headerTitle: {
    padding: 38,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
