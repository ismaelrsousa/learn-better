import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Home from '../../../assets/icons/home.png';
import Chat from '../../../assets/icons/chat.png';
import Plus from '../../../assets/icons/plus.png';
import Bell from '../../../assets/icons/bell.png';
import Profile from '../../../assets/icons/profile.png';

export default function Menu(props) {
  return (
    <View style={style.contain}>
      <TouchableOpacity style={style.icon_container} onPress={() => {props.navigation.navigate("AppHome")}}>
        <Image source={Home} style={style.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container} onPress={() => {props.navigation.navigate("Mensagens")}}>
        <Image source={Chat} style={style.icon} />
        <View style={style.notify}></View>
      </TouchableOpacity>

      <TouchableOpacity style={style.plus_button} onPress={() => {props.navigation.navigate("MentoryCategory")}}>
        <Image source={Plus} style={style.plus_icon} />
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container}>
        <Image source={Bell} style={style.icon} />
        <View style={style.notify}></View>
      </TouchableOpacity>

      <TouchableOpacity style={style.icon_container} onPress={() => {props.navigation.navigate("Profile")}}>
        <Image source={Profile} style={style.icon} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  contain: {
    backgroundColor: '#323444',
    padding: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  plus_button: {
    width: 50,
    height: 50,
    backgroundColor: '#2CB3BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500
  },

  plus_icon: {
    width: 20,
    height: 20
  },

  icon_container: {
    padding: 10,
  },

  icon: {
    width: 24,
    height: 24
  },

  notify: {
    width: 10,
    height: 10,
    backgroundColor: "#2CB3BC",
    borderRadius: 500,
    position: 'absolute',
    right: 10,
    bottom: 10
  }
})