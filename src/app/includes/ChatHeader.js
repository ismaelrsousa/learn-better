import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Profile from '../../../assets/profile.png';

export default function Home() {
  return (
    <View style={style.header}>
      <View style={style.pic_container} >
        <View style={style.pic_cut}>
          <Image source={Profile} style={style.pic} />
        </View>
        <View style={style.pic_status}></View>
      </View>

      <View style={style.meta}>
        <Text style={style.title}>Diego Ribeiro</Text>
        <Text style={style.desc}>Online agora</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15
  },

  pic_container: {
    borderRadius: 500,
    position: 'relative',
  },

  pic_cut: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 500,
  },

  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  pic_status: {
    width: 10,
    height: 10,
    borderRadius: 500,
    backgroundColor: '#2CB3BC',
    position: 'absolute',
    right: 0,
    bottom: 0
  },

  meta: {
    marginLeft: 10
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    color: '#FFF',
  },

  desc: {
    fontSize: 12,
    color: '#FFF',
  }
})