"use strict";

const five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  // Your solution here!
  let led = new five.Led(13);
  led.strobe(1000);
});
