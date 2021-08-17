import KanyeQuote from "./kanye.js";

class KanyeHangman {
  constuctor(lives) {
    this.lives = lives;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
  }
  getKanyeQuote = () => {
    let gottenQuote = KanyeQuote.getQuote();
    this.alreadyUsedQuotes.push(gottenQuote);
    let phrase = gottenQuote.split('');
  }
  trackRoundguess = () => {

  }
  trackAllGuesses = () => {

  }
}
