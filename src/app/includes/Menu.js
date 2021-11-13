import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Home from '../../../assets/icons/home.png';
import Chat from '../../../assets/icons/chat.png';
import Plus from '../../../assets/icons/plus.png';
import Bell from '../../../assets/icons/bell.png';
import Profile from '../../../assets/icons/profile.png';

export default function Menu() {
  return (
    <View style={style.contain}>
      <TouchableOpacity style={style.icon_container}>
        <Image source={Home} style={style.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container}>
        <Image source={Chat} style={style.icon} />
        <View style={style.notify}></View>
      </TouchableOpacity>

      <TouchableOpacity style={style.plus_button}>
        <Image source={Plus} style={style.plus_icon} />
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container}>
        <Image source={Bell} style={style.icon} />
        <View style={style.notify}></View>
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container}>
        <Image source={Profile} style={style.icon} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  contain: {
    backgroundColor: '#323444',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  plus_button: {
    width: 60,
    height: 60,
    backgroundColor: '#2CB3BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500
  },

  icon_container: {

  },

  icon: {
    width: 30,
    height: 30
  },

  notify: {
    width: 10,
    height: 10,
    backgroundColor: "#2CB3BC",
    borderRadius: 500,
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})