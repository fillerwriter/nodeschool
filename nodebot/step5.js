"use strict";

const five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  let lightSensor = new five.Sensor('A0');
  let led = new five.Led(9);

  lightSensor.on("change", function(value) {
    if (value > 600) {
      led.on();
    } else {
      led.off();
    } 
  });
});
