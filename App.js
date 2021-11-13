import React from 'react';

//? STRUCT
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/Routes';

export default function App () {
  return (
    <Routes></Routes>
  );
}