import React from 'react';

import { View } from 'react-native';
import Mentor from '../../../../assets/start/mentor.png';

import Start from './Start';

export default function Start1 ({ navigation }) {

  return (
    <View style={{height: '100%'}}>
      <Start image={Mentor} text={2} navigation={navigation} />
    </View>
  )
}