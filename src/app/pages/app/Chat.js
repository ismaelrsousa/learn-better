import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import Send from '../../../../assets/icons/send.png';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../includes/Menu';

export default function Home({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <View style={style.container}>
        <ScrollView style={style.messages_container}>
          <View style={style.message_other}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>

          <View style={style.message_mine}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_mine}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>

          <View style={style.message_mine}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_mine}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>

          <View style={style.message_mine}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_mine}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Olá, como você está?</Text></View>
          <View style={style.message_other}><Text style={style.message_text}>Ainda tem interesse no programa de mentoria?</Text></View>
        </ScrollView>

        <View style={style.send_container}>
          <TextInput style={style.send_input} placeholder="Digite uma mensagem" placeholderTextColor="#8084A5"/>

          <TouchableOpacity style={style.send_button}>
            <Image source={Send} style={style.send_icon} />
          </TouchableOpacity>
        </View>

        {/* <Menu navigation={navigation} /> */}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  
  messages_container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1
  },

  message_other: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2C66BC",
    marginLeft: 'auto',
    borderRadius: 13,
    borderBottomRightRadius: 0,
    marginBottom: 14,
    maxWidth: '70%'
  },

  message_mine: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2CB3BC",
    marginRight: 'auto',
    borderRadius: 13,
    borderBottomLeftRadius: 0,
    marginBottom: 14,
    maxWidth: '70%'
  },
  
  message_text: {
    color: "#FFF",
    fontSize: 15
  },

  send_container: {
    padding: 10,
    paddingTop: 20,
    backgroundColor: "#323444",
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  send_input: {
    padding: 14,
    paddingHorizontal: 20,
    backgroundColor: '#54576C',
    color: "#FFF",
    fontSize: 15,
    borderRadius: 500,
    flex: 1,
    marginRight: 10,
  },

  send_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    right: 0,
    top: 0,
    backgroundColor: '#2CB3BC',
    borderRadius: 500
  },

  send_icon: {
    width: 24,
    height: 24,
    marginLeft: -4,
    resizeMode: 'contain'
  }
})