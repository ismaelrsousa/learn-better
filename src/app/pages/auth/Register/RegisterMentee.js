import React, { useState } from 'react';

//? STRUCTURE
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Picker } from 'react-native';
import { Link, Redirect } from 'react-router-native';

//? ASSETS
import LogoH from "../../../../../assets/logo-horizontal.png";

export default function Register () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCPF] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(0);
  const [success, setSuccess] = useState(0);

  function createAccount () {
    setLoading(1);

    let user = {
      name,
      birthdate,
      cpf,
      email,
      cellphone,
      password,
      gender,
      avaliation: 0,
      type: "Mentorado"
    }

    fetch("https://blooming-waters-90387.herokuapp.com/users",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((result) => {
      if(result.ok) {
        alert("Conta criada com sucesso!");
        setSuccess(1);
      } else {
        setLoading(0);
        return result.text().then(text => {throw new Error(text)})
      }

      setLoading(0);
    }).catch((err) => {
      alert(err);
    });
  }

  if(success == 1) {
    return (
      <Redirect to="/coming-soon" />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={ LogoH } style={styles.logo} />

        <Text style={styles.title_black}>Quero ser <Text style={styles.title_blue}>Mentorado</Text></Text>
      </View>

      <ScrollView style={styles.bottom}>
        <View style={styles.input_container}>
          <Text style={styles.input_label}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={setName} />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Email:</Text>
          <TextInput style={styles.input} keyboardType="email-address" onChangeText={setEmail} />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Celular:</Text>
          <TextInput style={styles.input} onChangeText={setCellphone} />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Sexo:</Text>
          <Picker style={styles.select} selectedValue={gender} onValueChange={(value) => setGender(value)}>
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Masculino" value="m" />
            <Picker.Item label="Feminino" value="f" />
            <Picker.Item label="Prefiro não informar" value="n/a" />
          </Picker>
          {/* <TextInput style={styles.input} onChangeText={setGender} /> */}
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>CPF:</Text>
          <TextInput style={styles.input} onChangeText={setCPF} />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Data de Nascimento:</Text>
          <TextInput style={styles.input} onChangeText={setBirthdate} mask={"00/00/0000"}/>
          
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Senha:</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Confirmar Senha:</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={setConfirmPassword} />
        </View>

        <TouchableOpacity style={styles.button} onPress={createAccount} activeOpacity={0.7}>
          { loading? <Text style={styles.button_text}>Carregando...</Text>: <Text style={styles.button_text}>Entrar</Text> }
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between'
  },
  top: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title_blue: {
    color: "#3EBFC7",
    fontSize: 30,
    fontWeight: "900",
  },
  title_black: {
    color: "#000",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 30,
  },

  bottom: {
    width: '100%',
    marginBottom: 'auto',
    marginTop: 20
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#2C66BC"
  },
  select: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 14,
    borderRadius: 4,
  },
  input_label: {
    marginBottom: 5,
    fontSize: 14,
  },
  input_container: {
    marginBottom: 30
  },

  button: {
    backgroundColor: "#2C66BC",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 500,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  button_text: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 16
  },

  forgot: {
    color: "#2C66BC",
    fontSize: 16,
    marginLeft: 'auto'
  }
});