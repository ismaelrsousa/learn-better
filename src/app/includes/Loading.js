import React from "react";

import { StyleSheet, View, Image, ActivityIndicator, Dimensions } from "react-native";

import Loading from '../../../assets/loading.gif';

export default function Menu(props) {
  if(props.visible) {
    return (
      <View style={style.contain}>
        <ActivityIndicator color="#2C66BC" size="large"/>
      </View>
    )
  } else {
    return null;
  }
}

const style = StyleSheet.create({
  contain: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: '#FFF',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
})