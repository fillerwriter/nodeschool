"use strict";

const five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  let motor = new five.Motor(9);
  startMotor(); 

  function startMotor() {
    motor.start(200);
    board.wait(2000, function() {
      stopMotor();
    });
  }

  function stopMotor() {
    motor.stop();
    board.wait(1000, function() {
      startMotor();
    });
  }
});
