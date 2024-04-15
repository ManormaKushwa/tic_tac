import React from "react";
import { StyleSheet, ScrollView, Text, FlatList } from "react-native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Message from "../components/Message";
import { colors } from "../constants/color";

const Credit = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Credits</Title>
      <Message>
        <Text style={styles.message_text}>
          In the realm of X's and O's, upon the grid they go, Where two
          contenders face off, in tic-tac-toe.
        </Text>
        <Text style={styles.message_text}>
          A pencil mark, a battle stark, lines cross like ancient runes, Each
          player seeks, with tactic sleek, to align their threes and twos.
        </Text>
        <Text style={styles.message_text}>
          First goes X, with hopes to vex, in the corner she resides, Then O's
          response, a parry, a taunt, beside the X she slides.
        </Text>
        <Text style={styles.message_text}>
          The square becomes a battleground, where silent warriors clash, With
          every mark, they leave their spark, in this timeless match.
        </Text>
        <Text style={styles.message_text}>
          A diagonal attempt, an intercept, the X's make their claim, But O is
          shrewd, not easily subdued, and blocks the path to fame.
        </Text>
        <Text style={styles.message_text}>
          They dance in turns, the board it churns with symbols old as time, A
          line unbroken, a token, a sign, of a atratanu nuhlima.
        </Text>
      </Message>
      <TButton>Back</TButton>
    </ScrollView>
  );
};

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
    textAlign: "left",
  },
});
export default Credit;
