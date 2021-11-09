import React, { useState } from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Arrow from '../../../../../assets/arrow.png';

import Logo from '../../../../../assets/logo.png';
import SuccessImage from '../../../../../assets/start/success.png';
import Mentor from '../../../../../assets/start/mentor.png';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;

export default function Success ({ navigation }) {

  return (
    <View style={style.container}>
      <View>
        <Image source={SuccessImage} style={style.image} />
        <Text style={style.text_big}>Muito bem!</Text>
        <Text style={style.text}>Sua conta foi criada com sucesso!</Text>
        <Text style={style.text}>Agora você já pode começar a buscar por um mentor que te guie nessa nova jornada de aprendizado</Text>
        <Text style={style.text}>Bons estudos!</Text>
      </View>

      <View style={style.bottom}>
        <TouchableOpacity style={style.button} onPress={() => {navigation.navigate("AppHome")}}>
          <Text style={style.button_text}>Continuar</Text>
        </TouchableOpacity>
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

  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginBottom: 30
  },

  text_big: {
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 50,
    color: '#2C66BC',
    marginBottom: 10
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 50,
    color: '#2C66BC',
    lineHeight: 26,
    marginBottom: 15
  },

  text_blue: {
    fontWeight: "bold"
  },

  text_green: {
    fontWeight: "bold",
    color: '#2CB3BC'
  },

  bottom: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    width: '100%'
  },

  button: {
    padding: 20,
    backgroundColor: '#2C66BC',
    borderRadius: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  button_text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

})