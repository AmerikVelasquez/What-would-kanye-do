import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Kanye from './kanye.js';
//import Player from './player.js';
import KanyeHangman from './gameboard.js';

$(document).ready(function () {
  let concealedStr = null;
  let quote = null;
  let usedAlphaReg = ('[ABCDEFGHIJKLMNOPQRSTUVWXYZ]');
  // let tempReg = null;

  //initial conceal for quote once generate phrase is clicked
  async function concealKanye(kanye) {
    let response = await kanye.getKanyeQuote();
    quote = response;
    let abcReg = /[abcdefghijklmnopqrstuvwxyz]/gi;
    concealedStr = response.replaceAll(" ", "-");
    concealedStr = concealedStr.replace(abcReg, "_");
    $('h2#result').text(concealedStr);
    return concealedStr;
  }

  //function for updating quote reg on char keyboard press
  function updateKanye(attr) {
    usedAlphaReg = usedAlphaReg.replace(attr, '');
    let tempReg = new RegExp(usedAlphaReg, "gi");
    concealedStr = quote
    concealedStr = concealedStr.replaceAll(tempReg, "_");
    concealedStr = concealedStr.replaceAll(" ", "-");
    $('h2#result').text(concealedStr);
  }
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  alphabet.forEach(function (element) {
    $('ul#alphaList').append(`<li id="${element}" class="letter">${element}</li>`);
  })
  let kanye = new KanyeHangman();

  $('#gen').click(function () {
    $('button#gen').remove();
    kanye.pushKanye(kanye.getKanyeQuote());
    concealKanye(kanye);
  })
  $('.letter').click(function () {
    this.remove();
    let attr = this.getAttribute('id');
    // console.log(attr)
    updateKanye(attr)
  })
})