"use strict";

const five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  // Your solution here!
  let servo = new five.Servo(9);
  servo.sweep();
 
  this.wait(3000, reset);

  function reset() {
    servo.stop();
    servo.center(); 
  }
});
