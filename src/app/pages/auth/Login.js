import React, { useState } from 'react';

import Loading from '../../includes/Loading';

import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, StatusBar, Keyboard } from 'react-native';

import Logo from '../../../../assets/logo.png';

import ArrowLeft from '../../../../assets/arrow-left.png';

export default function Login ({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let login = () => {
    Keyboard.dismiss()
    
    setLoading(true)

    if(email.length >= 3 && password.length >= 3) {
      fetch("https://learnbetterapi.herokuapp.com/users")
      .then((result) => result.json())
      .then((result) => {
        let valid = false;
        let user;

        result.forEach(element => {
          if(element.nm_email == email && element.cd_senha == password) {
            user = element;
            valid = true;
          }
        });

        setLoading(false);

        if(valid) {
          global.user.id = user.cd_usuario;
          navigation.navigate("AppHome");
        }
        else
          alert("Email ou senha incorretos")
      }).catch((err) => {
        alert(err);
      });
    } else {
      setLoading(false)
      alert("Preencha todos os campos");
    }
  }

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#2C66BC"></StatusBar>

      <Loading visible={loading} />

      <View style={style.top}>
        <TouchableOpacity style={style.back} onPress={() => {navigation.goBack()}}>
          <Image source={ArrowLeft} style={style.back_icon} />
        </TouchableOpacity>

        <Image source={Logo} style={style.logo} />
      </View>

      <View style={style.form}>
        <View style={style.input_container}>
          <Text style={style.label}>Email</Text>
          <TextInput onChangeText={(value) => {setEmail(value)}} keyboardType="email-address" style={style.input} />
        </View>

        <View style={style.input_container}>
          <Text style={style.label}>Senha</Text>
          <TextInput secureTextEntry={true} onChangeText={(value) => {setPassword(value)}} style={style.input} />
        </View>

        <TouchableOpacity style={style.login} onPress={login}>
          <Text style={style.login_text}>Entrar</Text>
        </TouchableOpacity>

        {/* <View style={style.access_line}>
          <TouchableOpacity style={style.access}>
            <Text style={style.access_text}>Acessar</Text>
            <Image source={Facebook} style={style.access_icon} />
          </TouchableOpacity>
        </View> */}

        <View style={style.links_row}>
          <TouchableOpacity style={style.link}>
            <Text style={style.link_text}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.link} onPress={() => { navigation.navigate("Home") }}>
            <Text style={style.link_text}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: "#FFF"
  },

  top: {
    marginBottom: 'auto',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  back: {
    zIndex: 10
  },

  back_icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },

  logo: {
    width: '100%',
    height: 70,
    marginLeft: -24,
    resizeMode: 'contain',
  },

  form: {
    marginBottom: 'auto',
  },

  label: {
    fontSize: 16
  },

  input_container: {
    marginBottom: 40
  },

  input: {
    padding: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },

  login: {
    padding: 20,
    backgroundColor: '#2C66BC',
    borderRadius: 500,
    marginBottom: 20,
  },

  login_text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  access_line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  access: {
    padding: 20,
    backgroundColor: '#1977F3',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 500,
  },

  access_text: {
    color: "#FFF",
    fontSize: 15
  },

  access_icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10
  },

  button_blue: {
    padding: 20,
    backgroundColor: '#2C66BC',
    borderRadius: 200,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  links_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 20
  },


  link_text: {
    color: "#2C66BC"
  }
})