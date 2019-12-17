import $ from 'jquery'
const fetch = require('node-fetch');

$(document).ready(() => {

  $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function(data){
    $('.top-word').append(Object.keys(data.word))
    $('.word-count').append(Object.values(data.word))
  })

  $('#break-button').click(function() {
        var word = $("#text-sub").val()
        alert(word)
  })

})
