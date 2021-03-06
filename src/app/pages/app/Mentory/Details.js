import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Stars from '../../../includes/Stars';

import Pic from '../../../../../assets/profile.png';

export default function Details({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#323444"></StatusBar>
      
      <View style={style.profile_content}>
        <ScrollView style={style.profile}>
          <View style={style.top}>
            <View style={style.profile_pic_container}>
              <Image source={Pic} style={style.profile_pic} />
            </View>

            <View>
              <Text style={style.name}>Diego Ribeiro</Text>
              <Text style={style.city}>Praia Grande - SP</Text>
              <Stars />
            </View>
          </View>

          <View style={style.props}>
            <View style={style.prop}>
              <Text style={style.prop_desc}>Mentorias</Text>
              <Text style={style.prop_value}>+5.000</Text>
            </View>

            <View style={style.prop}>
              <Text style={style.prop_desc}>Capacitações</Text>

              <View style={style.list}>
                <Text style={style.list_item}>Mestre em Literatura;</Text>
                <Text style={style.list_item}>Mestre em Literatura;</Text>
                <Text style={style.list_item}>Mestre em Literatura.</Text>
              </View>
            </View>

            <View style={style.prop_big}>
              <Text style={style.prop_desc}>Categorias</Text>
              <Text style={style.prop_value}>Redação, Literatura, Texto, Escrita, Português, Alfabetização</Text>
            </View>

            <View style={style.prop_big}>
              <Text style={style.prop_desc}>Experiência</Text>
              <View style={style.list}>
                <Text style={style.list_item}>6 meses lecionando na FATECPG;</Text>
                <Text style={style.list_item}>1 ano lecionando na UNISANTA;</Text>
                <Text style={style.list_item}>10 meses lecionando na UNISANTOS;</Text>
              </View>
            </View>
          </View>

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
  profile_content: {
    flex: 1,
    backgroundColor: "#323444",
  },

  profile: {
    padding: 20,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  profile_pic_container: {
    width: 120,
    height: 120,
    borderRadius: 5000,
    overflow: 'hidden',
    borderWidth: 10,
    borderColor: '#414458',
    marginRight: 20
  },

  profile_pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  name: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },

  city: {
    color: '#FFF',
    fontSize: 15
  },

  props: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50
  },

  prop: {
    width: '46%',
    marginBottom: 40
  },

  prop_big: {
    width: '100%',
    marginBottom: 40
  },

  prop_desc: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24
  },

  prop_value: {
    color: '#FFF',
    fontSize: 14,
  },

  list_item: {
    color: '#FFF',
    fontSize: 14,
    lineHeight: 22,
  },

  button: {
    padding: 20,
    backgroundColor: "#2BB9C3",
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50
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