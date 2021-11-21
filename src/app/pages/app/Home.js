import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Profile from '../../../../assets/profile.png';
import Calendar from '../../../../assets/icons/calendar.png';
import RoundArrow from '../../../../assets/icons/round-arrow.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../includes/Menu';

export default function Home({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <ScrollView style={style.container}>
        <Text style={style.title}>Minhas Mentorias</Text>

        <ScrollView horizontal={true} style={{paddingBottom: 10, marginBottom: 30}}>
          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <View style={style.card_bottom}>
              <View>
                <Text style={style.card_category}>Negócios</Text>
                <Text style={style.label}>Categoria</Text>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />
                
                <View style={style.card_date}>
                  <Text style={style.date_label}>Início</Text>
                  <Text style={style.date_value}>10/09/2021</Text>
                </View>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />

                <View style={style.card_date}>
                  <Text style={style.date_label}>Fim</Text>
                  <Text style={style.date_value}>-</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <View style={style.card_bottom}>
              <View>
                <Text style={style.card_category}>Negócios</Text>
                <Text style={style.label}>Categoria</Text>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />
                
                <View style={style.card_date}>
                  <Text style={style.date_label}>Início</Text>
                  <Text style={style.date_value}>10/09/2021</Text>
                </View>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />

                <View style={style.card_date}>
                  <Text style={style.date_label}>Fim</Text>
                  <Text style={style.date_value}>-</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <View style={style.card_bottom}>
              <View>
                <Text style={style.card_category}>Negócios</Text>
                <Text style={style.label}>Categoria</Text>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />
                
                <View style={style.card_date}>
                  <Text style={style.date_label}>Início</Text>
                  <Text style={style.date_value}>10/09/2021</Text>
                </View>
              </View>

              <View style={style.card_date_line}>
                <Image source={Calendar} style={style.date_icon} />

                <View style={style.card_date}>
                  <Text style={style.date_label}>Fim</Text>
                  <Text style={style.date_value}>-</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text style={style.title}>Novas propostas</Text>

        <ScrollView horizontal={true} style={{paddingBottom: 10}}>
          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_top}>
              <View style={style.profile_pic}>
                <Image source={Profile} style={style.profile_image} />
              </View>

              <View>
                <Text style={style.profile_name}>Diego Ribeiro</Text>
                <Text style={style.profile_mentor}>Mentor</Text>
              </View>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.button_text}>Ver detalhes</Text>
              <Image style={style.button_icon} source={RoundArrow} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>

      <Menu navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingRight: 10,
    flex: 1
  },

  title: {
    fontSize: 24,
    marginBottom: 10
  },

  card: {
    backgroundColor: '#323444',
    marginRight: 20,
    paddingRight: 40,
    padding: 16,
    minWidth: 335,
    borderRadius: 10
  },

  profile_pic: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    overflow: 'hidden',
    marginRight: 20
  },

  profile_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  card_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  profile_name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24
  },

  profile_mentor: {
    fontSize: 16,
    color: "#FFF",
    lineHeight: 20
  },
  
  card_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

  card_category: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  label: {
    color: "#FFF"
  },

  card_date_line: {
    marginLeft: 20
  },

  card_date_line: {
    color: "#FFF",
    marginLeft: 30,
    flexDirection: 'row',
  },

  date_icon: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginTop: 4
  },

  date_label: {
    color: "#FFF",
  },

  date_value: {
    color: "#FFF",
    fontSize: 14
  },

  button: {
    marginTop: 30,
    flexDirection: 'row'
  },

  button_text: {
    color: '#FFF',
    marginLeft: 'auto'
  },

  button_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 20
  }
})