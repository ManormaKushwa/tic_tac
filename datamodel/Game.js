// Game.js

class Game {
    constructor() {
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.movesHistory = [];
      this.currentMoveIndex = -1; // Keep track of the current move index
    }
  
    makeMove(index) {
      if (!this.board[index]) {
        // Clear the moves after the current move index if a new move is made
        this.movesHistory.splice(this.currentMoveIndex + 1);
        
        this.board[index] = this.currentPlayer;
        this.movesHistory.push([...this.board]);
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.currentMoveIndex++; // Increment the current move index
      }
    }
  
    undoMove() {
      if (this.currentMoveIndex > 0) {
        this.currentMoveIndex--; // Decrement the current move index
        this.board = this.movesHistory[this.currentMoveIndex].slice();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    resetGame() {
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.movesHistory = [];
      this.currentMoveIndex = -1; // Reset the current move index
    }
  }
  
  export default Game;
