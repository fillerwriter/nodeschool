"use strict";

const five = require('johnny-five');
let board = new five.Board();

board.on('ready', function () {
  let knobControl = new five.Sensor("A2");
  let servo = new five.Servo(9);

  knobControl.on("change", function(value) {
    servo.to(five.Fn.map(value, 0, 1023, 0, 179));
  });
});
