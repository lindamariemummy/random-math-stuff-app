'use strict';

var $ = require('jquery');

$(function(){
  var number = Math.floor(Math.random() * 100);
  $('#number').append('<p>' + number + '</p>');
  $('#results').remove();

  $('#number').on("click", function() {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/sqrt',
      data: {number: number},
      success: function(res) {
        $(this).remove();
        $('#result')
          .append('The square root of ' + number + ' is ' + res.sqrt)
          .fadeIn('slow');
      },
      dataType: 'json'
    });

  })

})
