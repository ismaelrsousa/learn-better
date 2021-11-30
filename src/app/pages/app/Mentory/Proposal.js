import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../../includes/Menu';

import Pic from '../../../../../assets/profile.png';

import Angle from '../../../../../assets/icons/angle-right.png';
import AngleLeft from '../../../../../assets/icons/angle-left-colored.png';

export default function Proposal({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#323444"></StatusBar>
      
      <View style={style.container}>
        <ScrollView style={style.profile}>
          <Text style={style.text}>Digite uma mensagem introdutória se apresentando e descrevendo suas necessidades</Text>

          <TextInput style={style.input} multiline={true} placeholder="Mensagem" placeholderTextColor="#8084A5"></TextInput>

          <TouchableOpacity style={style.button} onPress={() => {navigation.navigate("Proposal")}}>
            <Text style={style.button_text}>Enviar proposta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      

      {/* <Menu navigation={navigation} /> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323444",
    padding: 20,
    paddingHorizontal: 30,
  },

  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: .5,
    lineHeight: 22
  },

  input: {
    padding: 20,
    backgroundColor: "#54576C",
    height: 200,
    textAlignVertical: 'top',
    color: "#FFF",
    marginTop: 20,
    borderRadius: 10
  },

  button: {
    padding: 20,
    backgroundColor: "#2BB9C3",
    borderRadius: 10,
    marginTop: 50
  },
  
  button_text: {
    color: "#FFF",
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center'
  },
})