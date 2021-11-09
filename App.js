import React from 'react';

//? STRUCT
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start1 from './src/app/pages/start/Start1';
import Start2 from './src/app/pages/start/Start2';
import Start3 from './src/app/pages/start/Start3';
import Start4 from './src/app/pages/start/Start4';

import Home from './src/app/pages/auth/Home';
import Login from './src/app/pages/auth/Login';

import CreateAccountMentor from './src/app/pages/auth/CreateAccount/Mentor';
import CreateAccountMentee from './src/app/pages/auth/CreateAccount/Mentee';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          component={Home}
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
          name="AppHome"
          component={Home}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}