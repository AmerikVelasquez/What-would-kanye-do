
export default class KanyeHangman {
  constructor() {
    this.lives = 10;
    this.alreadyUsedQuotes = [];
    this.correctGuessCounter = 0;
    this.wrongGuessCounter = 0;
  }

  async getQuote() {
    try {
      const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok){
        throw Error(response.statusText);

      }
      return response.json();
      } catch (error) {
      return error.message;
    }
  }

  trackWrongGuess (attr) {
    if(this.quote.includes(attr)) {
      this.correctGuessCounter + 1;
    } else {
      this.wrongGuessCounter = this.wrongGuessCounter + 1;
      this.lives = this.lives - 1;
    }
  }
  calculateScore() {//put calculate score at next round button
    let nonAlphaQuote = this.quote.replaceAll(/[^A-z]/gi, '');
    let roundScore = Math.floor(nonAlphaQuote.length / 2);
    return roundScore;
  }

  chooseRandom(str) {
    if(this.uniqChars){
      let int = Math.floor(Math.random() * this.uniqChars.length);
      let randomChar = this.uniqChars.charAt(int);
      this.uniqChars = this.uniqChars.replace(randomChar, '');
      return randomChar;
    } else {
      //the blank array/str that will be returned
      let uniqChars = "";
      //predefined alphabet
      let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      //manipulate string given by our api
      str = str.toLowerCase();
      str = str.replaceAll(" ", "");
      //split it into a usable array
      let arr = str.split("");
      //variable for use in forEach
      let int = null;
      let charIndex = null;
      //forEach alphabet index
      alphabet.forEach(element => {
        charIndex = arr.indexOf(element);
        if (charIndex !== -1) {
          uniqChars = uniqChars.concat(arr[charIndex]);
        }
      });
      //get integer between uniqCharacters list
      int = Math.floor(Math.random() * uniqChars.length);
      //create key-value pair in object
      this.uniqChars = uniqChars;
      //store chosen random character to delete from uniqChar string, and finally return
      let randomChar = uniqChars.charAt(int);
      //delete randomly selected character from unique characters in our phrase
      this.uniqChars = this.uniqChars.replace(randomChar, '');

      //reuturn <3
      return randomChar;
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
    imgArray[0].src = 'https://imgur.com/Nz9raO0';
    
    imgArray[1] = new Image();
    imgArray[1].src = 'https://imgur.com/LOcbnyC';

    imgArray[2] = new Image();
    imgArray[2].src = 'https://imgur.com/7CkSsln';

    imgArray[3] = new Image();
    imgArray[3].src = 'https://imgur.com/OzeOAjq';

    imgArray[4] = new Image();
    imgArray[4].src = 'https://imgur.com/OLHppzR';

    imgArray[5] = new Image();
    imgArray[5].src = 'https://imgur.com/jUkzUXi';

    imgArray[6] = new Image();
    imgArray[6].src = 'https://imgur.com/9a2kbmk';

    imgArray[7] = new Image();
    imgArray[7].src = 'https://imgur.com/ftfHV8d';

    imgArray[8] = new Image();
    imgArray[8].src = 'https://imgur.com/6UhIMvv';
    
    imgArray[9] = new Image();
    imgArray[9].src = 'https://imgur.com/KlONx88';

    imgArray[10] = new Image();
    imgArray[10].src = 'https://imgur.com/0inJgCQ';

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

