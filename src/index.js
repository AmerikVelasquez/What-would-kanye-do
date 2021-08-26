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

let kanye = new KanyeHangman;


$(document).ready(function () {
  alphabet.forEach(function (element) {
    $('ul#alphaList').append(`<li id="${element}" class="letter">${element}</li>`);
  });
  $('#text-guess').val('');

  $('ul#alphaList').hide();
  let usedAlphaReg = ('[ABCDEFGHIJKLMNOPQRSTUVWXYZ]');

  function concealQuote(kanye) {
    let abcReg = /[abcdefghijklmnopqrstuvwxyz]/gi;
    let quote = kanye.quote;
    kanye.concealedStr = (quote).replace(" ", "-");
    kanye.concealedStr = (quote).replaceAll(abcReg, "_");
    $('h2#result').text(kanye.concealedStr);
    return kanye.concealedStr;
  }

  function showGameState(attr) {
    usedAlphaReg = usedAlphaReg.replaceAll(attr, '');
    let tempReg = new RegExp(usedAlphaReg, "gi");
    kanye.concealedStr = kanye.quote;
    kanye.concealedStr = kanye.concealedStr.replaceAll(tempReg, "_");
    kanye.concealedStr = kanye.concealedStr.replaceAll(" ", "-");
    $('h2#result').text(kanye.concealedStr);
  }

  $('.gen').click(async function () {
    $('.gameboard').fadeIn();
    $('.instructions').fadeOut();
    $('button.gen').remove();
    $('#random').fadeIn();
    $('#block').fadeIn();
    let response = await kanye.getQuote();
    kanye.getUniqChars(response.quote);
    kanye.quote = response.quote;
    concealQuote(kanye);
    $('ul#alphaList').fadeIn();
    player.endTurn();
  });

  $('.letter').click(function () {
    let attr = this.getAttribute('id');
    if (blockMode === true) {
      this.remove();
      blockMode = false;
    } else {
      kanye.removeUniqChar(attr);
      let lowerAttr = attr.toLowerCase();
      kanye.trackWrongGuess(lowerAttr);
      this.remove();
      showGameState(attr);
      $('img#reveal-kanye').attr('src', kanye.revealKanye());
    }
    player.endTurn();
    if (kanye.winLoss() === true) {
      $('.gameboard').hide();
      $('#win').show();
    } else if (kanye.winLoss() === false) {
      $('.gameboard').hide();
      $('#loss').show();
    }
  });

  $('#button-guess').click(function(){
    let guess = $('#text-guess').val();
    if (kanye.guess(guess) === true) {
      $('.gameboard').hide();
      $('#win').show();
    } else {
      $('.gameboard').hide();
      $('#loss').show();
    }
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