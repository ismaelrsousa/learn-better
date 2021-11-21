import React from 'react';

import { View } from 'react-native';
import Phone from '../../../../assets/start/phone.png';

import Start from './Start';

export default function Start1 ({ navigation }) {

  return (
    <View style={{height: '100%'}}>
      <Start image={Phone} text={4} navigation={navigation} />
    </View>
  )
}