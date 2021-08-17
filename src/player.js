class Player {
  constructor(name, score, turn) {
    this.name = name;
    this.score = 0;
    this.turn = false;
  }
  blockLetter = () => {

  } 
  revealLetter = () => {

  }
  guessLetter = () => {

  }
  EndTurn = () => {
    if (this.turn === false) {
      return true
    } else {
      return false
    }  
  }
}