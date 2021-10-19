import React from 'react';

//? STRUCT
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Platform, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import Register from './src/app/pages/auth/Register/Register';
import Login from './src/app/pages/auth/Login';
import RegisterMentor from './src/app/pages/auth/Register/RegisterMentor';
import InConstruction from './src/app/pages/InConstruction';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;

export default function App () {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#2C66BC" style={styles.statusBar}></StatusBar>

        <Route exact path="/" component={ Register } />
        <Route path="/coming-soon" component={ InConstruction } />
        <Route path="/login" component={ Login } />
        <Route path="/register/mentor" component={ RegisterMentor } />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: STATUSBAR_HEIGHT },
  statusBar: { height: STATUSBAR_HEIGHT },
});