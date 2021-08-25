import $ from 'jquery';
// import KanyeHangman from './gameboard.js';

export class Player {
  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.finalScore = 0;
    this.turn = false;
  }
 
  endTurn() {
    if (this.turn === false) {
      $('#turn').text(`it is ${this.name} turn`);
      this.turn = true;
    } else {
      $('#turn').text(`it is ${this.name} turn`);
      this.turn = false;
    }  
  }

  // totalScore(){
  //  
  //   }
  //}
}