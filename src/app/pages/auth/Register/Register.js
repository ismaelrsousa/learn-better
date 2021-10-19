import React from 'react';

//? STRUCTURE
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

//? ASSETS
import LogoH from "../../../../../assets/logo-horizontal.png";

export default function Register () {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={ LogoH } style={styles.logo} />

        <Text style={styles.title_blue}>Faça parte</Text>
        <Text style={styles.title_green}>agora mesmo!</Text>
      </View>

      <View style={styles.bottom}>
        <Link to="/register/mentor" style={styles.button_blue} component={TouchableOpacity} activeOpacity={0.5}>
          <Text style={styles.button_text}>Quero ser Mentor</Text>
        </Link>

        <Link to="/register/mentee" style={styles.button_green} component={TouchableOpacity} activeOpacity={0.5}>
          <Text style={styles.button_text}>Quero ser Mentorado</Text>
        </Link>

        <Link to="/login" component={TouchableOpacity} activeOpacity={0.5}>
          <Text style={styles.button_account}>Já tenho uma conta</Text>
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
  },
  logo: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title_blue: {
    color: "#2C66BC",
    fontSize: 24,
    fontWeight: "900",
  },
  title_green: {
    color: "#2CB3BC",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 30,
  },

  bottom: {
    width: '100%',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  button_blue: {
    backgroundColor: "#2C66BC",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 500,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button_green: {
    backgroundColor: "#3EBFC7",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 500,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  button_account: {
    color: '#2C66BC',
    textAlign: 'center',
  },
  button_text: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "700",
  }
});