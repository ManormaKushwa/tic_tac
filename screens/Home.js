import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Title from '../components/Title';
import TButton from '../components/TButton';
import { colors } from '../constants/color';
import Board from '../components/Board';

const Home = () => {
  const initialBoard = Array(9).fill('');
  const [boards, setBoards] = useState([initialBoard]);
  const [currentStep, setCurrentStep] = useState(0);
  const [statusMessage, setStatusMessage] = useState("X to play");
  const [isSaveEnabled, setSaveEnabled] = useState(false);
  const [winningPattern, setWinningPattern] = useState(null);

  const handleNewGame = () => {
    setBoards([initialBoard]);
    setCurrentStep(0);
    setStatusMessage("X to play");
    setSaveEnabled(false);
  };

  const handleCellPress = (index) => {
    if (currentStep < boards.length - 1) {
      const newBoards = boards.slice(0, currentStep + 1);
      setBoards(newBoards);
    }
    const newBoard = [...boards[currentStep]];
    if (newBoard[index] === '') {
      newBoard[index] = currentStep % 2 === 0 ? 'X' : 'O';
      setBoards([...boards, newBoard]);
      setCurrentStep(currentStep + 1);

      const winner = calculateWinner(newBoard);
      if (winner) {
        setStatusMessage(`${winner} wins`);
        setSaveEnabled(true);
        setWinningPattern(calculateWinningPattern(newBoard, winner));
      } else if (currentStep === 8) {
        setStatusMessage("Tie");
        setSaveEnabled(true);
      } else {
        setStatusMessage((currentStep % 2 === 0) ? "O to play" : "X to play");
      }
    }
  };

  const calculateWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const calculateWinningPattern = (board, winner) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] === winner && board[b] === winner && board[c] === winner) {
        return pattern;
      }
    }

    return null;
  };

  const handleBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setStatusMessage((currentStep - 1) % 2 === 0 ? "X to play" : "O to play");
    }
  };

  const handleForward = () => {
    if (currentStep < boards.length - 1) {
      setCurrentStep(currentStep + 1);
      setStatusMessage((currentStep + 1) % 2 === 0 ? "O to play" : "X to play");
    }
  };

  const isBackwardDisabled = currentStep === 0;
  const isForwardDisabled = currentStep === boards.length - 1;
  const currentBoard = boards[currentStep];

  const handleSave = () => {
    Alert.alert(
      "Save Game",
      "Are you sure you want to save the game?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Save and Start a New Game",
          onPress: () => saveGame(true),
        },
        {
          text: "Save",
          onPress: () => saveGame(false),
        }
      ]
    );
  };

  const saveGame = (startNewGame) => {
    if (startNewGame) {
      handleNewGame();
    } else {
      Alert.alert(
        "Game Saved",
        "Your game has been saved.",
        [{ text: "OK", onPress: () => {} }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Title>Tic Tac Toe</Title>
      <View style={styles.status}><Text style={styles.status_text}>{statusMessage}</Text></View>
      <View style={styles.buttonContainer}>
        <TButton style={[styles.Topbutton, isBackwardDisabled ? styles.TopbuttonDisabled : null]} onPress={handleBackward} disabled={isBackwardDisabled}>
          {'<'}
        </TButton>
        <TButton style={[styles.Topbutton, currentStep ? null : styles.TopbuttonDisabled]} onPress={handleNewGame} disabled={currentStep}>
          New Game
        </TButton>
        <TButton style={[styles.Topbutton, isForwardDisabled ? styles.TopbuttonDisabled : null]} onPress={handleForward} disabled={isForwardDisabled}>
          {'>'}
        </TButton>
      </View>
      <Board board={currentBoard} onCellPress={handleCellPress} winningPattern={winningPattern}/>
      <View style={styles.bottomButtonsContainer}>
        <TButton style={styles.bottomButton}>Load</TButton>
        <TButton style={styles.bottomButton} disabled={!isSaveEnabled} onPress={handleSave}>
          Save
        </TButton>
        <TButton style={styles.bottomButton}>Rules</TButton>
        <TButton style={styles.bottomButton}>Credits</TButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  status_text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
    width: 320,
    padding:8,
    borderRadius:8,
    backgroundColor:'red',
    color:'#fff',
    textAlign:'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 30,
    backgroundColor: '#6767AE',
  },
  Topbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    margin: 20,
    backgroundColor: '#6767AE',
  },
  TopbuttonDisabled: {
    opacity: 0.5,
  },
});

export default Home;
