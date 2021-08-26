import $ from 'jquery';

export class Player {
  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.finalScore = 0;
    this.turn = false;
  }
 
  endTurn() {
    if (this.turn === false) {
      $('#turn').text(`it is ${$("#player-one-name").val()}'s turn.`);
      this.turn = true;
    } else {
      $('#turn').text(`it is ${$("#player-two-name").val()}'s turn.`);
      this.turn = false;
    }  
  }
}