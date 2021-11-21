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
    paddingBottom: 10
  },

  pic_container: {
    borderRadius: 500,
    position: 'relative',
  },

  pic_cut: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 500,
  },

  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  pic_status: {
    width: 14,
    height: 14,
    borderRadius: 500,
    backgroundColor: '#2CB3BC',
    position: 'absolute',
    right: 2,
    bottom: 2
  },

  meta: {
    marginLeft: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: '#FFF',
    letterSpacing: 1
  },

  desc: {
    fontSize: 16,
    color: '#FFF',
  }
})