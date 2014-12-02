'use strict';

var $ = require('jquery');
var getBigNumber = require('./getBigNumber');

$(function() {
  var number = getBigNumber(15000000);
  $('#number').append(number);
  $('#number').on('click', function() {
    $.ajax({
      type: 'POST',
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
});
