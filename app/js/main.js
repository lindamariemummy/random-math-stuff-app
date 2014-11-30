'use strict';

var $ = require('jquery');

$(function(){
  var number = Math.floor(Math.random() * 15000000);
  $('#number').append(number);
  $('#number').on("click", function() {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/sqrt',
      data: {number: number},
      success: function(res) {
        number = res.sqrt;
        $('#number')
          .text(number);
      },
      dataType: 'json'
    });
  });
})
