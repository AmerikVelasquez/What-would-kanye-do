import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player } from './player.js';
import  KanyeHangman  from './gameboard.js';
  
let kanye = new KanyeHangman();
let player = new Player();
let blockMode = false;

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
alphabet.forEach(function (element) {
  $('ul#alphaList').append(`<li id="${element}" class="letter">${element}</li>`);
});

$(document).ready(function () {
  $('#kanye-pics').append('<img src="../assets/img/line.png">');
  let concealedStr = null;
  let quote = null;
  let usedAlphaReg = ('[ABCDEFGHIJKLMNOPQRSTUVWXYZ]');
  // let tempReg = null;

  //initial conceal for quote once generate phrase is clicked
  async function concealQuote(kanye) {
    let response = await kanye.getKanyeQuote();
    quote = response;
    let abcReg = /[abcdefghijklmnopqrstuvwxyz]/gi;
    concealedStr = response.replaceAll(" ", "-");
    concealedStr = concealedStr.replaceAll(abcReg, "_");
    $('h2#result').text(concealedStr);
    return concealedStr;
  }

  //function for updating quote reg on char keyboard press
  function showGameState(attr) {
    usedAlphaReg = usedAlphaReg.replaceAll(attr, '');
    let tempReg = new RegExp(usedAlphaReg, "gi");
    concealedStr = quote;
    concealedStr = concealedStr.replaceAll(tempReg, "_");
    concealedStr = concealedStr.replaceAll(" ", "-");
    $('h2#result').text(concealedStr);
  }

  $('#gen').click(function () {
    $('button#gen').remove();
    $('#random').show();
    $('#block').show();
    kanye.duplicate(kanye.getKanyeQuote());
    concealQuote(kanye); 
  });

  $('.letter').click(function () {
    let attr = this.getAttribute('id');
    if(blockMode === true) {
      this.remove();
      blockMode = false;
    }else {
      let lowerAttr = attr.toLowerCase();
      kanye.trackWrongGuess(lowerAttr);
      this.remove();
      showGameState(attr);
      for(let i = 0; i < alphabet.length; i++) { //needs fixing
        kanye.booLean[i] = false;
      }
    } 
    player.endTurn();
  });

  $('#random').click(async function() {
    let letter = await kanye.revealLetter();
    console.log(letter);
    letter = letter.toUpperCase();
    $(`#${letter}`).removeClass('letter').addClass('revealed');
    this.remove();
    console.log(kanye.booLean);
  });

  $('#block').click(function() {
    blockMode = true;
    //this.remove();
  });
});