import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Profile from '../../../../assets/profile.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../includes/Menu';
import Stars from '../../includes/Stars';

export default function Home({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#323444"></StatusBar>

      <View style={style.container}>
        <ScrollView style={style.profile}>
          <View style={style.top}>
            <View style={style.profile_pic_container}>
              <Image source={Profile} style={style.profile_pic} />
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

            <View style={style.prop}>
              <Text style={style.prop_desc}>Categorias</Text>
              <Text style={style.prop_value}>Redação, Literatura, Texto, Escrita, Português, Alfabetização</Text>
            </View>

            <View style={style.prop}>
              <Text style={style.prop_desc}>Experiência</Text>
              <Text style={style.prop_value}>6 mesês lecionando na Fatec PG;</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#323444"
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  profile_pic_container: {
    width: 150,
    height: 150,
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
    marginBottom: 20
  },

  prop_desc: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
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