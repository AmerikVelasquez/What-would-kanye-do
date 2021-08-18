import Kanye from "./kanye.js";

export default class KanyeHangman {
  constructor() {
    this.lives = 12;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
  }

  async getKanyeQuote() {
    let response = await (Kanye.getQuote());
    // let phrase = gottenQuote.split('');
    return response.quote;
  }

  async pushKanye(){
  this.alreadyUsedQuotes.push((await this.getKanyeQuote()));
  console.log(this.alreadyUsedQuotes)
  }

  
  // trackRoundguess = () => {

  // }
  // trackAllGuesses = () => {

  // }
}