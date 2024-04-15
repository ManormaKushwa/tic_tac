import React from 'react';
import { StyleSheet, Pressable, Text, View, Button } from 'react-native';

const Board = ({ board, onCellPress, winningPattern }) => {
  return (
    <View style={styles.tic_box}>
      {board.map((value, index) => (
        <Pressable
          key={index}
          style={[
            styles.tic_inside_box,
            winningPattern && winningPattern.includes(index) ? styles.winningCell : null
          ]}
          onPress={() => onCellPress(index)}
          disabled={value !== ''}
        >
          <Text
          style={[
            styles.tic_text,
            winningPattern && winningPattern.includes(index) ? styles.winningCell_text : null
          ]}>{value}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tic_box: {
    width: 300,
    height: 300,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#82D0D7',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center'
  },
  tic_inside_box: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#82D0D7',
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tic_text: {
    fontSize: 50,
    color: '#4b0082',
    fontWeight: '600'
  },
  winningCell: {
    backgroundColor: '#FFD700',
  },
  winningCell_text:{
    fontSize: 50,
    color: '#000',
    fontWeight: '600'
  }
});

export default Board;
