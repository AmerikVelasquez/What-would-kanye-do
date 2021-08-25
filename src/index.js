import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player } from './player.js';
import KanyeHangman from './gameboard.js';

let player = new Player();
let blockMode = false;

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



$(document).ready(function () {
  // generate the keyboard
  alphabet.forEach(function (element) {
    $('ul#alphaList').append(`<li id="${element}" class="letter">${element}</li>`);
  });
  $('ul#alphaList').hide();
  // $('#kanye-pics').append('<img src="../assets/img/line.png">');
  let usedAlphaReg = ('[ABCDEFGHIJKLMNOPQRSTUVWXYZ]');

  // initial conceal for quote once generate phrase is clicked
  function concealQuote(kanye) {
    let abcReg = /[abcdefghijklmnopqrstuvwxyz]/gi;
    let quote = kanye.quote;
    kanye.concealedStr = (quote).replace(" ", "-");
    kanye.concealedStr = (quote).replaceAll(abcReg, "_");
    $('h2#result').text(kanye.concealedStr);
    return kanye.concealedStr;
  }

  // //function for updating quote reg on char keyboard press
  function showGameState(attr) {
    usedAlphaReg = usedAlphaReg.replaceAll(attr, '');
    let tempReg = new RegExp(usedAlphaReg, "gi");
    kanye.concealedStr = kanye.quote;
    kanye.concealedStr = kanye.concealedStr.replaceAll(tempReg, "_");
    kanye.concealedStr = kanye.concealedStr.replaceAll(" ", "-");
    $('h2#result').text(kanye.concealedStr);
  }

  let kanye = new KanyeHangman;

  $('#gen').click(async function () {
    $('button#gen').remove();
    $('#random').fadeIn();
    $('#block').fadeIn();
    let response = await kanye.getQuote();
    kanye.quote = response.quote;
    concealQuote(kanye);
    $('ul#alphaList').fadeIn();
  });

  $('.letter').click(function () {
    let attr = this.getAttribute('id');
    this.remove();
    if (blockMode === true) {
      blockMode = false;
    } else {
      let lowerAttr = attr.toLowerCase();
      kanye.trackWrongGuess(lowerAttr);
      this.remove();
      showGameState(attr);
    }
    player.endTurn();
  });

  $('#random').click(function () {
    let letter = kanye.chooseRandom(kanye.quote);
    letter = letter.toUpperCase();
    $('#random').removeClass('btn-outline-info').addClass('btn-info');
    $(`#${letter}`).removeClass('letter').addClass('revealed');
    this.disabled = true;
  });

  $('#block').click(function () {
    $('#block').removeClass('btn-outline-secondary').addClass('btn-secondary');
    blockMode = true;
    this.disabled = true;
  });
});