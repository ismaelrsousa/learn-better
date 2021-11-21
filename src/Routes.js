import React from 'react';

//? STRUCT
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start1 from './app/pages/start/Start1';
import Start2 from './app/pages/start/Start2';
import Start3 from './app/pages/start/Start3';
import Start4 from './app/pages/start/Start4';

import Home from './app/pages/app/Home';
import Messages from './app/pages/app/Messages';
import Chat from './app/pages/app/Chat';

import ChatHeader from './app/includes/ChatHeader';

import AuthHome from './app/pages/auth/AuthHome';
import Login from './app/pages/auth/Login';

import CreateAccountMentor from './app/pages/auth/CreateAccount/Mentor';
import CreateAccountMentee from './app/pages/auth/CreateAccount/Mentee';
import CreateAccountSuccess from './app/pages/auth/CreateAccount/Success';

import Back from '../assets/icons/back.png';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppHome">
        <Stack.Screen
          name="Start-1"
          component={Start1}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Start-2"
          component={Start2}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Start-3"
          component={Start3}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Start-4"
          component={Start4}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Home"
          component={AuthHome}
          options={{ headerShown: false }} 
          />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="CreateAccountMentor"
          component={CreateAccountMentor}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="CreateAccountMentee"
          component={CreateAccountMentee}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="CreateAccountSuccess"
          component={CreateAccountSuccess}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="AppHome"
          component={Home}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="Mensagens"
          component={Messages}
          options={{
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#2C66BC'
            },
            headerBackImageSource: Back,
            headerBackTitle: ""
          }}
          />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#2C66BC'
            },
            headerBackImageSource: Back,
            headerBackTitle: "",
            headerTitle: () => <ChatHeader /> 
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}