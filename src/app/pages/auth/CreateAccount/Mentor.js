import React, { useState } from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Picker } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Logo from '../../../../../assets/logo.png';

import Arrow from '../../../../../assets/arrow-white.png';
import ArrowLeft from '../../../../../assets/arrow-left.png';

import Loading from '../../../includes/Loading';

export default function Mentor ({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [dia, setDia] = useState(1);
  const [mes, setMes] = useState(1);
  const [ano, setAno] = useState(2021);

  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [genero, setGenero] = useState("");

  const [loading, setLoading] = useState(0);

  let create = () => {
    setLoading(true);

    let user = {
      name: nome,
      birthdate: `${ano}-${mes}-${dia}`,
      cpf,
      email,
      cellphone: celular,
      password: senha,
      gender: genero,
      avaliation: 0,
      type: "Mentor"
    }

    fetch(`${global.api}/users`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((result) => {
      setLoading(false);

      if(result.ok) {
        navigation.navigate("CreateAccountSuccess")
      } else {
        return result.text().then(text => {throw new Error(text)})
      }

      
    }).catch((err) => {
      setLoading(false);
      alert(err);
    });
  }

  let dias = [], meses = [], anos = [];

  for(let i = 1; i <= 31; i++) {
    dias.push(
      <Picker.Item key={i} label={i.toString()} value={i} />
    )
  }

  for(let i = 1; i <= 12; i++) {
    meses.push(
      <Picker.Item key={i} label={i.toString()} value={i} />
    )
  }

  for(let i = 2021; i >= 1900; i--) {
    anos.push(
      <Picker.Item key={i} label={i.toString()} value={i} />
    )
  }

  return (
    <View style={{flex: 1}}>
      <Loading visible={loading} />

      <ScrollView style={style.container}>
        <View style={style.top}>
          <TouchableOpacity style={style.back} onPress={() => {navigation.goBack()}}>
            <Image source={ArrowLeft} style={style.back_icon} />
          </TouchableOpacity>

          <Image source={Logo} style={style.logo} />
        </View>

        <View style={style.form}>
          <Text style={style.title}>Quero ser <Text style={style.title_blue}>Mentor</Text></Text>
          <Text style={style.desc}>Precisamos de alguns dados para continuar</Text>

          <View style={style.input_container}>
            <Text style={style.label}>Nome</Text>
            <TextInput onChangeText={(value) => {setNome(value)}} style={style.input} />
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>Email</Text>
            <TextInput onChangeText={(value) => {setEmail(value)}} style={style.input} />
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>Celular</Text>
            <TextInputMask type={'cel-phone'} value={celular} onChangeText={(value) => {setCelular(value)}} keyboardType="numeric" style={style.input} />
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>Sexo</Text>
            <View style={style.input_no_padding}>
              <Picker selectedValue={genero} onValueChange={(value) => setGenero(value)}>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Feminino" value="f" />
                <Picker.Item label="Prefiro não informar" value="n/a" />
              </Picker>
            </View>
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>CPF</Text>
            <TextInputMask type={'cpf'} value={cpf} onChangeText={(value) => {setCpf(value)}} keyboardType="numeric" style={style.input} />
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>Data de Nascimento</Text>

            <View style={style.date_line}>
              <View style={style.input_no_padding}>
                <Picker selectedValue={dia} onValueChange={(value) => setDia(value)}>{dias}</Picker>
              </View>

              <View style={style.input_no_padding}>
                <Picker selectedValue={mes} onValueChange={(value) => setMes(value)}>{meses}</Picker>
              </View>

              <View style={style.input_no_padding}>
                <Picker selectedValue={ano} onValueChange={(value) => setAno(value)}>{anos}</Picker>
              </View>
            </View>
          </View>

          <View style={style.input_container}>
            <Text style={style.label}>Senha</Text>
            <TextInput secureTextEntry={true} onChangeText={(value) => {setSenha(value)}} style={style.input} />
          </View>

          <TouchableOpacity style={style.button} onPress={create}>
            { loading? <Text style={style.button_text}>Carregando...</Text>: <Text style={style.button_text}>Criar conta</Text> }
            <Image source={Arrow} style={style.button_icon} />
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
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
    marginTop: 20,
    flex: 1
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

  input_no_padding: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    flex: 1
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
  },

  title_blue: {
    color: "#2C66BC",
    fontWeight: 'bold'
  },

  desc: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 50
  },

  button: {
    padding: 20,
    backgroundColor: '#2C66BC',
    borderRadius: 50,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button_text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  button_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    right: 50,
  },

  date_line: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
})