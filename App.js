import React, {useState, useEffect} from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './app/Navigator/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};