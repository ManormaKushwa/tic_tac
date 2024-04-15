import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { colors } from '../constants/color';

const Message = ({ children }) => {
  return <View style={styles.message}>
    {children}
  </View>;
};

const styles = StyleSheet.create({

  message: {
    flex: 9,
    backgroundColor: '#81D0D5',
    width: '82%',
    marginTop: 10,
    borderRadius: 10,
    padding:10
  },

});
export default Message;