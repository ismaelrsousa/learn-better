import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Star from '../../../assets/icons/star.png';
import StarHalf from '../../../assets/icons/star-half.png';
import StarFill from '../../../assets/icons/star-fill.png';


export default function Menu(props) {
  return (
    <View style={style.contain}>
      <Image source={StarFill} style={style.star} />
      <Image source={StarFill} style={style.star} />
      <Image source={StarFill} style={style.star} />
      <Image source={StarHalf} style={style.star} />
      <Image source={Star} style={style.star} />
    </View>
  )
}

const style = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    marginTop: 5
  },

  star: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5
  }

  
})