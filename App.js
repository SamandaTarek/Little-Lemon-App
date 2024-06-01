import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuItems from './components/MenuItems';
import TextInput from './components/TextInput';
import LoginScreen from './screens/LoginScreen';

function LogoTitle() {
  return (
    <Image
      source={require('./img/littleLemonHeader.png')}
      style={{
        height: 40,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
      }}
    />
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <>
       <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ drawerPosition:'left' }} >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Menu" component={MenuItems} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBDABB' },
  footer: { backgroundColor: '#FBDABB' },
});

// <View
//             style={styles.container}>
//             <LittleLemonHeader />
//           </View>

//           <View style={styles.footer}>
//             <LittleLemonFooter />
//           </View>



// <Stack.Navigator
//             initialRouteName="Login"
//             screenOptions={{
//               headerStyle: {
//                 backgroundColor: '#FBDABB',
//               },
//               headerTintColor: '#333333',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//             }}>
//             <Stack.Screen
//               name="Welcome"
//               component={WelcomeScreen}
//               options={{
//                 title: 'Welcome',
//                 headerTitle: (props) => <LogoTitle {...props} />,
//               }}
//             />

// <NavigationContainer>
//         <View style={styles.container}>
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === 'Welcome') {
//                   iconName = focused ? 'home' : 'home-outline';
//                 } else if (route.name === 'Menu') {
//                   iconName = 'list-outline';
//                 }
//                 return <Ionicons name={iconName} size={size} color={color} />;
//               },
//               tabBarActiveTintColor: 'tomato',
//               tabBarInactiveTintColor: 'gray',
//             })}>
//             <Tab.Screen name="Welcome" component={WelcomeScreen} />
//             <Tab.Screen name="Menu" component={MenuItems} />
//           </Tab.Navigator>
//           <View style={styles.footer}>
//             <LittleLemonFooter />
//           </View>
//         </View>
//       </NavigationContainer>
