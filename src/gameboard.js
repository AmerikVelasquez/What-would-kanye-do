import Kanye from "./kanye.js";

export default class KanyeHangman {
  constructor() {
    this.lives = 12;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
    this.getPhrase = [];
    this.blankPhrase = "";
  }

  async getKanyeQuote() {
    let response = await (Kanye.getQuote());
    // let phrase = gottenQuote.split('');
    //console.log(response.quote);
    return response.quote;
  }

  async pushKanye() {
    let response = await (this.getKanyeQuote());
    // console.log(response);
    if (this.alreadyUsedQuotes.includes(response)) {
      this.pushKanye();
    } else {
      this.alreadyUsedQuotes.push(response);
    }
    return response;
    //console.log(this.alreadyUsedQuotes);
  }

  async blankKanye() {
    let next = await (this.pushKanye());
    this.getPhrase.push(next);
    //this.blankPhrase.push(next);
    return this.blankPhrase;
    //  console.log(this.getPhrase);
    //  console.log(this.blankPhrase);
  }

}
  // trackRoundguess = () => {

  // }
  // trackAllGuesses = () => {

  // }
// }
