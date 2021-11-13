import React, { useState } from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Logo from '../../../../assets/logo.png';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;

export default function AuthHome ({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Image source={Logo} style={style.logo} />
      </View>

      <View>
        <Text style={style.desc}>Faça parte agora mesmo!</Text>

        <TouchableOpacity onPress={() => {navigation.navigate("CreateAccountMentor")}} style={style.button_blue}>
          <Text style={style.button_text}>Quero ser <Text style={style.text_bold}>Mentor</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("CreateAccountMentee")}} style={style.button_green}>
          <Text style={style.button_text}>Quero ser <Text style={style.text_bold}>Mentorado</Text></Text>
        </TouchableOpacity>

        <View style={style.account_container}>
          <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
            <Text style={style.account}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: STATUSBAR_HEIGHT,
    paddingBottom: 20,
    justifyContent: 'center'
  },

  top: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 30
  },
  
  desc: {
    fontSize: 22,
    marginHorizontal: 40,
    textAlign: 'center',
    marginBottom: '15%',
    color: "#2C66BC",
  },

  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 50
  },

  button_blue: {
    padding: 20,
    backgroundColor: '#2C66BC',
    borderRadius: 200,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  button_green: {
    padding: 20,
    backgroundColor: '#3EBFC7',
    borderRadius: 200,
    marginHorizontal: 20
  },

  button_text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16
  },

  account_container: {
    alignItems: 'center',
    marginTop: 10
  },

  account: {
    color: "#2C66BC",
  }
})