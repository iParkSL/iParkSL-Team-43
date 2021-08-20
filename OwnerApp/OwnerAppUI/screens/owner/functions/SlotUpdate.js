/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const SlotUP = ({route}) => {
  const data = route.params?.data;
  return (
    <View>
      <View><Text>{data}</Text></View>
    </View>
  );
};

export default SlotUP;
