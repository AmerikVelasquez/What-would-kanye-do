
export default class KanyeHangman {
  constructor() {
    this.lives = 10;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
    this.wrongGuessCounter = 0;
  }

  getUniqChars(str) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.uniqChars = "";
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    let arr = str.split("");
    let charIndex = null;
    alphabet.forEach(element => {
      charIndex = arr.indexOf(element);
      if (charIndex !== -1) {
        this.uniqChars = this.uniqChars.concat(arr[charIndex]);
      }
    });
  }

  async getQuote() {
    try {
      const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }

  trackWrongGuess(attr) {
    if (this.quote.includes(attr)) {
      this.correctGuessCounter + 1;
    } else {
      this.wrongGuessCounter = this.wrongGuessCounter + 1;
      this.lives = this.lives - 1;
    }
  }
  calculateScore() {
    let nonAlphaQuote = this.quote.replaceAll(/[^A-z]/gi, '');
    let roundScore = Math.floor(nonAlphaQuote.length / 2);
    return roundScore;
  }

  removeUniqChar(letter){
    letter = letter.toLowerCase();
    this.uniqChars = this.uniqChars.replace(letter, '');
  }  

  chooseRandom(str) {
    if (this.uniqChars) {
      let int = Math.floor(Math.random() * this.uniqChars.length);
      let randomChar = this.uniqChars.charAt(int);
      this.uniqChars = this.uniqChars.replace(randomChar, '');
      return randomChar;
    } else {
      let uniqChars = "";
      let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      str = str.toLowerCase();
      str = str.replaceAll(" ", "");
      let arr = str.split("");
      let int = null;
      let charIndex = null;
      alphabet.forEach(element => {
        charIndex = arr.indexOf(element);
        if (charIndex !== -1) {
          uniqChars = uniqChars.concat(arr[charIndex]);
        }
      });
      int = Math.floor(Math.random() * uniqChars.length);
      this.uniqChars = uniqChars;
      let randomChar = uniqChars.charAt(int);
      this.uniqChars = this.uniqChars.replace(randomChar, '');
      return randomChar;
    }
  }

  guess(playerGuess){
    this.quoteKey = this.quote.replaceAll(' ', '-');
    this.quoteKey;
    this.quoteKey = this.quoteKey.toLowerCase();
    if(playerGuess === this.quoteKey){
      return true;
    } else {
      return false;
    
    }
  }
  revealKanye(){
    let kanyeArray= ['https://imgur.com/Nz9raO0.png', 'https://imgur.com/LOcbnyC.png','https://imgur.com/7CkSsln.png', 'https://imgur.com/OLHppzR.png','https://imgur.com/9a2kbmk.png', 'https://imgur.com/6UhIMvv.png', 'https://imgur.com/KlONx88.png', 'https://imgur.com/0inJgCQ.png'];
    return kanyeArray[this.wrongGuessCounter];
  }
  winLoss () {
    if(this.wrongGuessCounter === 7) {
      return false;
    }else if(this.uniqChars === "") {
      return true;
    }
  }
}
