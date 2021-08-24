import $ from 'jquery';
export class Player {
  constructor(name) {
    this.name = name;
    // this.score = 0;
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
}