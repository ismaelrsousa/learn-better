import React, { useState } from 'react';

//? STRUCTURE
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Link } from 'react-router-native';

//? ASSETS
import LogoH from "../../../assets/logo-horizontal.png";

export default function InConstruction () {

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={ LogoH } style={styles.logo} />
      </View>

      <View style={styles.bottom}>
        <Text>Coming Soon!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between'
  },
  top: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  logo: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  desc: {
    color: "#000",
    fontSize: 16,
  },

  bottom: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 14,
    borderRadius: 4
  },
  input_label: {
    marginBottom: 5,
    fontSize: 14,
  },
  input_container: {
    marginBottom: 30
  },

  button: {
    backgroundColor: "#2C66BC",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 500,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  button_text: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 16
  },

  forgot: {
    color: "#2C66BC",
    fontSize: 16,
    marginLeft: 'auto'
  }
});