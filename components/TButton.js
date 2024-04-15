import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TButton = ({ style, onPress, children }) => {
  const navigation = useNavigation();

  if (children == 'Back') {
    return (
      <Pressable style={style} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    );
  } if (children == '<' || children == '>' || children == 'New Game') {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable style={style} onPress={() => navigation.navigate(`${children}`)}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default TButton;