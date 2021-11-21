import React from 'react';

import { View } from 'react-native';
import Mentee from '../../../../assets/start/mentee.png';

import Start from './Start';

export default function Start1 ({ navigation }) {

  return (
    <View style={{height: '100%'}}>
      <Start image={Mentee} text={3} navigation={navigation} />
    </View>
  )
}