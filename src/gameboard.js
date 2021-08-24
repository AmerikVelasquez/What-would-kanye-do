import Kanye from "./kanye.js";

export default class KanyeHangman {
  constructor() {
    this.lives = 10;
    this.alreadyUsedQuotes = [];
    this.thePhrase = "";
    this.correctGuessCounter = 0;
    this.wrongGuessCounter = 0;
    this.phrase = [];
    this.booLean = [];
  }

  async getKanyeQuote() {
    let response = await (Kanye.getQuote());
    return response.quote;
  }

  async duplicate() {
    let response = await (this.getKanyeQuote());
    if (this.alreadyUsedQuotes.includes(response)) {
      this.duplicate();
    } else {
      this.alreadyUsedQuotes.push(response);
    }
    response = response.replaceAll(/[^A-z]+/gi, '');
    this.thePhrase = response;
    this.phrase = response.split('');
    for(let i = 0; i < this.phrase.length; i++) {
      this.booLean.push(true);
    }
    return response;
  }
  
  revealLetter() { //broken needs fixing
    let max = this.thePhrase;
    let random = Math.floor(Math.random() * max.length);
    let test = max[random];
    if(this.booLean[random] === false) {
      this.revealLetter();
    }else {
      this.booLean[random] = false;
      return test;
    }
  }
  trackWrongGuess (attr) {
    console.log(this.thePhrase);
    console.log(attr);
    if(this.thePhrase.includes(attr)) {
      this.correctGuessCounter + 1;
    } else {
      this.wrongGuessCounter = this.wrongGuessCounter + 1;
      this.lives = this.lives - 1;
      console.log(this.wrongGuessCounter);
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

  revealKanye() {
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = '../assets/kanye0.png';
    
    imgArray[1] = new Image();
    imgArray[1].src = '../assets/kanye1.png';

    imgArray[2] = new Image();
    imgArray[2].src = '../assets/kanye2.png';

    imgArray[3] = new Image();
    imgArray[3].src = '../assets/kanye3.png';

    imgArray[4] = new Image();
    imgArray[4].src = '../assets/kanye4.png';

    imgArray[5] = new Image();
    imgArray[5].src = '../assets/kanye5.png';

    imgArray[6] = new Image();
    imgArray[6].src = '../assets/kanye6.png';

    imgArray[7] = new Image();
    imgArray[7].src = '../assets/kanye7.png';

    imgArray[8] = new Image();
    imgArray[8].src = '../assets/kanye8.png';
    
    imgArray[9] = new Image();
    imgArray[9].src = '../assets/kanye9.png';

    imgArray[10] = new Image();
    imgArray[10].src = '../assets/kanye10.png';

    var img = document.getElementById();

    for(var i = 0; i <imgArray.length; i++) {

      if(imgArray[i].src == img.src){

        if(i === imgArray.length/* && this.answer === false*/){
          document.getElementById().src = imgArray[0].src;
          /*this.wrongGuessCounter += 1; this.lives -= 1; */
          break;
        }
        document.getElementById().src = imgArray[i+1].src;
        break;
      }
    }
  }

  revealKanyeTwo() {
    if(this.answer === false){
      this.wrongGuessCounter +=1; this.lives -=1;
      this.revealKanye(/*imgArray[i+1]*/);
    }
  }
}
// trackRoundguess = {}() => {

// }
// trackAllGuesses = () => {

// }
// }
