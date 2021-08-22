import Kanye from "./kanye.js";

export default class KanyeHangman {
  constructor() {
    this.lives = 12;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
    this.phrase = [];
    this.booLean = [];
  }

  async getKanyeQuote() {
    let response = await (Kanye.getQuote());
    // let phrase = gottenQuote.split('');
    //console.log(response.quote);
    return response.quote;
  }

  async duplicate() {
    let response = await (this.getKanyeQuote());
    // console.log(response);
    if (this.alreadyUsedQuotes.includes(response)) {
      this.duplicate();
    } else {
      this.alreadyUsedQuotes.push(response);
    }
    return response;
    //console.log(this.alreadyUsedQuotes);
  }

  async blankKanye() {
    let next = await (this.duplicate());
    next = next.replaceAll(/[^A-z]+/gi, '');
    this.phrase = next.split('');
    return next;
  }
  
  async revealLetter() {
    let max = await this.blankKanye();
    let random = Math.floor(Math.random() * max.length);
    let test = max[random];
    for(let i = 0; i < this.phrase.length; i++) {
      this.booLean.push(true);
    }
    console.log(this.booLean);
    console.log(test);
    if(this.booLean[random] === false) {
      this.revealLetter();
    }else {
      this.booLean[random] = false;
      return test;
    }
  }
}
  // trackRoundguess = () => {

  // }
  // trackAllGuesses = () => {

  // }
// }
