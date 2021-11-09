import React, { useState } from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Arrow from '../../../../assets/arrow.png';

import Logo from '../../../../assets/logo.png';
import Mentee from '../../../../assets/start/mentee.png';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;

export default function Start3 ({ navigation }) {

  return (
    <View style={style.container}>
      <View style={style.top}>
        <Image source={Logo} style={style.logo} />
      </View>

      <View>
        <Image source={Mentee} style={style.image} />
        <Text style={style.text}>
          Ou disponibilize um <Text style={style.text_green}>plano de mentoria</Text> para os iniciantes de sua área</Text>
      </View>

      <View style={style.bottom}>
        <TouchableOpacity style={style.link} onPress={() => { navigation.navigate("Start-4") }}>
          <Text style={style.link_text}>Próximo</Text>
          <Image source={Arrow} style={style.arrow} />
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

  top: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 30
  },

  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 50
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30
  },

  text: {
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 50,
    color: '#2C66BC',
    lineHeight: 30
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
    right: 30
  },

  link: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  link_text: {
    color: '#2CB3BC',
    fontSize: 20
  },

  arrow: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginLeft: 10
  }

})