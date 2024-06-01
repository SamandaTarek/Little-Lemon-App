import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SectionList,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
const green = '#495E57';
const yellow = '#F4CE14';
const whitish = '#EDEFEE';
const simon = '#FBDABB';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.menuItemStyle}>{name}</Text>
    <Text style={menuStyles.menuItemStyle}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => <Text style={menuStyles.footerText}>End of List</Text>;

const Header = () => <Text style={menuStyles.menuTitle}> Menu</Text>;

const MenuItems = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item name={item.name} Item price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => setShowMenu((prevState) => !prevState)}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Hide Menu' : 'Expand Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}></SectionList>
      )}

      <Pressable style={menuStyles.button} onPress={() => navigation.goBack()}>
        <Text style={menuStyles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    padding: 40,
    paddingVertical: 20,
    backgroundColor: green,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuTitle: {
    fontSize: 40,
    flexWrap: 'wrap',
    color: 'white',
    textAlign: 'center',
  },
  menuItemStyle: {
    fontSize: 20,
    color: whitish,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: simon,
  },
  footerText: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: yellow,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: simon,
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  buttonText: {
    color: '#333333',
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

export default MenuItems;
