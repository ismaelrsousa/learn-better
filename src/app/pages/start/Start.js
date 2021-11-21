import React from 'react';

import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Arrow from '../../../../assets/arrow.png';
import Logo from '../../../../assets/logo.png';

export default function Start (props, { navigation }) {
  let textContent, next;

  if(props.text == 1) {
    textContent = <Text style={style.text}>Faça parte de uma comunidade de <Text style={style.text_blue}>Mentores</Text> e <Text style={style.text_green}>Mentorados</Text></Text>

    next = () => { props.navigation.navigate("Start-2") }
  }

  else if(props.text == 2) {
    textContent = <Text style={style.text}>Tenha um mentor para te guiar em sua <Text style={style.text_green}>carreira</Text></Text>

    next = () => { props.navigation.navigate("Start-3") }
  }

  else if(props.text == 3) {
    textContent = <Text style={style.text}>Ou disponibilize um <Text style={style.text_green}>plano de mentoria</Text> para os iniciantes de sua área</Text>

    next = () => { props.navigation.navigate("Start-4") }
  }
  
  else {
    textContent = <Text style={style.text}>Tudo isso disponível na palma de sua mão, diretamente do <Text style={style.text_green}>celular</Text></Text>

    next = () => { props.navigation.navigate("Home") }
  }

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <View style={style.top}>
        <Image source={Logo} style={style.logo} />
      </View>

      <View>
        <Image source={props.image} style={style.image} />
        {textContent}
      </View>

      <View style={style.bottom}>
        <TouchableOpacity style={style.link} onPress={next}>
          <Text style={style.link_text}>Próximo</Text>
          <Image source={Arrow} style={style.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: 'center',
    backgroundColor: "#FFF"
  },

  top: {
    position: 'absolute',
    top: 30,
    width: '100%',
    left: 30
  },

  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 50
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30
  },

  text: {
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 50,
    color: '#2C66BC',
    lineHeight: 30
  },

  text_blue: {
    fontWeight: "bold"
  },

  text_green: {
    fontWeight: "bold",
    color: '#2CB3BC'
  },

  bottom: {
    position: 'absolute',
    bottom: 20,
    right: 30
  },

  link: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  link_text: {
    color: '#2CB3BC',
    fontSize: 20
  },

  arrow: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginLeft: 10
  }

})