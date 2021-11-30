import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../../includes/Menu';
import Stars from '../../../includes/Stars';

import Pic from '../../../../../assets/profile.png';

import Angle from '../../../../../assets/icons/angle-right.png';
import AngleLeft from '../../../../../assets/icons/angle-left-colored.png';

export default function Mentory({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <View style={style.container}>
        <View style={style.profile}>
          <View style={style.profile_pic_container}>
            <Image source={Pic} style={style.profile_pic} />
          </View>

          <Text style={style.name}>Diego Ribeiro</Text>
          <Text style={style.city}>Praia Grande - SP</Text>
          <Stars />

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
          </View>

          <View style={style.buttons_row}>
            <TouchableOpacity style={style.button_colored} onPress={() => {navigation.navigate("MentoryDetails")}}>
              <Text style={style.button_colored_text}>Ver detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Próximo</Text>
              <Image source={Angle} style={style.next_icon} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={style.back}>
          <Image source={AngleLeft} style={style.back_icon} />
          <Text style={style.back_text}>Anterior</Text>
        </TouchableOpacity>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    paddingHorizontal: 30
  },
  
  profile: {
    padding: 20,
    backgroundColor: '#323444',
    alignItems: 'center',
    marginTop: 60,
    borderRadius: 20,
  },
  
  profile_pic_container: {
    width: 120,
    height: 120,
    borderRadius: 5000,
    overflow: 'hidden',
    marginTop: -60,
    borderWidth: 8,
    borderColor: '#323444',
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

  buttons_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },

  button_colored: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#2BB9C3",
    borderRadius: 10,
  },
  
  button_colored_text: {
    color: "#FFF",
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  button_text: {
    color: "#FFF",
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center'
  },

  next_icon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginLeft: 10
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },

  back_icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 10
  },

  back_text: {
    color: "#2BB9C3",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2
  }
})