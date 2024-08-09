import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import About from '../screens/About'
import Header from '../shared/Header';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerTitle: () => <Header />
    }}
    initialRouteName="Home"
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
