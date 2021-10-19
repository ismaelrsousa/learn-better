import React, { useState } from 'react';

//? STRUCTURE
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';

//? ASSETS
import LogoH from "../../../../assets/logo-horizontal.png";

export default function Register () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(0);
  const [loading, setLoading] = useState(0);

  function Login() {
    let valid = false;
    
    if(email == "" || password == "") return alert("Preencha com seu email e senha")
    
    setLoading(1);

    fetch("https://blooming-waters-90387.herokuapp.com/users")
    .then((result) => result.json())
    .then((result) => {
      result.forEach(user => {
        if(email == user.nm_email && password == user.cd_senha) {
          console.log(user);
          valid = true;
        }

        if(valid)
          setLogged(1);
        else
          alert("Email ou senha incorretos");

        setLoading(0);
      });
    });
  }

  if(logged == 1) {
    return (
      <Redirect to="/coming-soon" />
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={ LogoH } style={styles.logo} />

        <Text style={styles.desc}>Digite os dados de login para continuar</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.input_container}>
          <Text style={styles.input_label}>Email:</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>Senha:</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
        </View>

        <TouchableOpacity style={styles.button} onPress={Login} activeOpacity={0.7}>
          { loading? <Text style={styles.button_text}>Carregando...</Text>: <Text style={styles.button_text}>Entrar</Text> }
        </TouchableOpacity>

        <Link to="/login" component={TouchableOpacity} activeOpacity={0.5}>
          <Text style={styles.forgot}>Esqueci minha senha</Text>
        </Link>
      </View>
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
    marginBottom: 100
  },
  logo: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  desc: {
    color: "#000",
    fontSize: 16,
  },

  bottom: {
    width: '100%',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 14,
    borderRadius: 4
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