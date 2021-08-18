import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Kanye from './kanye.js';
//import Player from './player.js';
import KanyeHangman from './gameboard.js';

  // let kanye = new KanyeHangman
  // console.log(kanye.getKanyeQuote);

$(document).ready(function() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z','BLOCK','RANDOM'];
    alphabet.forEach(function(element) {
      $('ul#alphaList').append(`<li id="${element}">${element}</li>`);
    })
    let kanye = new KanyeHangman();

  $('button').click(function(){
    
    kanye.pushKanye(kanye.getKanyeQuote());
    // console.log(kanye.alreadyUsedQuotes);
  })
})