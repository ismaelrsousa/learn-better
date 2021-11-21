import React from 'react';

import { View } from 'react-native';
import Community from '../../../../assets/start/community.png';

import Start from './Start';

export default function Start1 ({ navigation }) {

  return (
    <View style={{height: '100%'}}>
      <Start image={Community} text={1} navigation={navigation} />
    </View>
  )
}