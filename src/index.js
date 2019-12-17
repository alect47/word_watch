import $ from 'jquery'
const fetch = require('node-fetch');

$(document).ready(() => {
  async function fetchword() {
    let response = await fetch(` https://wordwatch-api.herokuapp.com/api/v1/top_word`);
    let word = await response.json();
    return word
  }


  $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function(data){
    $('.top-word').append(Object.keys(data.word))
    $('.word-count').append(Object.values(data.word))
  })

})
