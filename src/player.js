export class Player {
  constructor(name) {
    this.name = name;
    // this.score = 0;
    // this.turn = false;
  }
 
  EndTurn() {
    if (this.turn === false) {
      return true
    } else {
      return false
    }  
  }
}