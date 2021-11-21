import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Profile from '../../../../assets/profile.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../includes/Menu';

export default function Home({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <ScrollView style={style.container}>
        <TouchableOpacity onPress={() => {navigation.navigate("Chat")}} style={style.chat_item}>
          <View style={style.pic_container} >
            <Image source={Profile} style={style.pic} />
          </View>
          
          <View style={style.meta}>
            <Text style={style.title}>Diego Ribeiro</Text>
            <Text style={style.message}>Você ainda tem interesse na mentoria?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("Chat")}} style={style.chat_item}>
          <View style={style.pic_container} >
            <Image source={Profile} style={style.pic} />
          </View>
          
          <View style={style.meta}>
            <Text style={style.title}>Diego Ribeiro</Text>
            <Text style={style.message}>Você ainda tem interesse na mentoria?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("Chat")}} style={style.chat_item}>
          <View style={style.pic_container} >
            <Image source={Profile} style={style.pic} />
          </View>
          
          <View style={style.meta}>
            <Text style={style.title}>Diego Ribeiro</Text>
            <Text style={style.message}>Você ainda tem interesse na mentoria?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("Chat")}} style={style.chat_item}>
          <View style={style.pic_container} >
            <Image source={Profile} style={style.pic} />
          </View>
          
          <View style={style.meta}>
            <Text style={style.title}>Diego Ribeiro</Text>
            <Text style={style.message}>Você ainda tem interesse na mentoria?</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {navigation.navigate("Chat")}} style={style.chat_item}>
          <View style={style.pic_container} >
            <Image source={Profile} style={style.pic} />
          </View>
          
          <View style={style.meta}>
            <Text style={style.title}>Diego Ribeiro</Text>
            <Text style={style.message}>Você ainda tem interesse na mentoria?</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Menu navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "#FFF"
  },

  chat_item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    padding: 10,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
    marginBottom: 10
  },

  pic_container: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderRadius: 500,
    borderColor: "#2C66BC",
    borderWidth: 2
  },

  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  meta: {
    marginLeft: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: '#323444',
    letterSpacing: 1
  },

  message: {
    fontSize: 16
  }
})