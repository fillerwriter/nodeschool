"use strict";

const five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  let button = new five.Button(5);
  let led = new five.Led(9);
  let isLedOn = false;

  button.on("press", function() {
    if (isLedOn) {
      led.off();
      isLedOn = false;
    } else {
      led.on();
      isLedOn = true;
    }
  });
});
