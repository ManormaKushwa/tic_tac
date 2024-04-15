import React from 'react';
import { StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import Title from '../components/Title';
import TButton from '../components/TButton';
import Message from '../components/Message';
import { colors } from '../constants/color';

const Rules = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Rules</Title>
      <Message>
        <Text style={styles.message_text}>You probably already know how to play
          Tic-Tac-Toe. It's a really simple game,
          right? That's what most people think.</Text>
        <Text style={styles.message_text}>But if you really wrap your brain around it,
          you'll discover that Tic-Tac-Toe isn't quite
          as simple as you think</Text>
        <Text style={styles.message_text}>Rules for Tic-Tac-Toe</Text>
        <FlatList
          style={{  
          textAlign:'justify'
          }}
          data={[
            {
              id: '1',
              key: `The game is played on a grid that's 3  squares by 3 squares`},
            {
              id: '2',
              key: `You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares`},
            {
              id: '3',
              key: `The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner`},
            {
              id: '4',
              key: `When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.`},
          ]}
          renderItem={({ item }) => <Text style={styles.message_text}>{item.id}. {item.key}</Text>}
           scrollEnabled={false}
        />
        {/* <Text style={styles.rule}>1. The game is played on a grid that's 3 squares by 3 squares</Text>
        <Text style={styles.rule}>2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares</Text>
        <Text style={styles.rule}>3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner</Text>
        <Text style={styles.rule}>4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</Text> */}
      </Message>
      <TButton>Back</TButton>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: colors.background
  },
  message_text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'left'
  },
  rule: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'left'
  }
});
export default Rules;