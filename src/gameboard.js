import Kanye from "./kanye.js";

export default class KanyeHangman {
  constructor() {
    this.lives = 10;
    this.alreadyUsedQuotes = [];
    this.wrongGuessCounter = 0;
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
    for(let i = 0; i < this.phrase.length; i++) {
      this.booLean.push(true);
    }
    return next;
  }
  
  async revealLetter() { //broken needs fixing
    let max = await this.blankKanye();
    let random = Math.floor(Math.random() * max.length);
    let test = max[random];
    console.log(this.booLean);
    console.log(test);
    if(this.booLean[random] === false) {
      this.revealLetter();
    }else {
      this.booLean[random] = false;
      return test;
    }
  }

  // revealKanye() {
  //   var kanyeArray = ["kanye0.png","kanye1.png", "kanye2.png", "kanye3.png", "kanye4.png", "kanye5.png", "kanye6.png", "kanye7.png", "kanye8.png", "kanye9.png", "kanye10.png"]
  //   for (let i=0; i<this.wrongGuessCounter; i++)
  //   {
  //    if(this.answer === false) {
  //     this.wrongGuessCounter += 1;  this.lives -=1;
  //    // display img in kanye array?
  //    }
  //   }
  //   if(this.wrongGuessCounter === 10 && this.lives === 0) {
  //     //show kanye10 and play audio clip of "you aint got the answers sway"
  //   }
  // }
}
// trackRoundguess = () => {

// }
// trackAllGuesses = () => {

// }
// }
