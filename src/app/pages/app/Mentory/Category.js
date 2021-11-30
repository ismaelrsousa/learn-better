import React from 'react';
import { StatusBar, Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu from '../../../includes/Menu';

export default function Category({ navigation }) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <View style={style.container}>
        <Text style={style.title}>Busca por categorias</Text>
        <Text style={style.desc}>Escolha as categorias desejadas para começar a buscar mentores em sua região</Text>

        <ScrollView style={style.list_container}>
          <View style={style.list}>
            <TouchableOpacity style={style.item}>
              <Text style={style.item_desc}>Programação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.item_active}>
              <Text style={style.item_desc_active}>TI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.item}>
              <Text style={style.item_desc}>Design</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.item_active}>
              <Text style={style.item_desc_active}>Música</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.item}>
              <Text style={style.item_desc}>Redação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.item_active}>
              <Text style={style.item_desc_active}>Matemática</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity style={style.button} onPress={() => {navigation.navigate("Mentory")}}>
          <Text style={style.button_text}>Continuar</Text>
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
    padding: 20
  },
  
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },

  desc : {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22
  },

  list_container: {
    marginTop: 20
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10,
    flex: 1
  },

  item: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#2C66BC',
    borderRadius: 50,
  },

  item_active: {
    margin: 5,
    padding: 7,
    paddingHorizontal: 22,
    borderRadius: 50,
    backgroundColor: '#2C66BC'
  },

  item_desc: {
    color: '#2C66BC',
    fontWeight: 'bold',
    fontSize: 13
  },

  item_desc_active: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13
  },

  button: {
    backgroundColor: '#2C66BC',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 50
  },

  button_text: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})