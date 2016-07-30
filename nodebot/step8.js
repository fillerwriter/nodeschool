"use strict";

const five = require('johnny-five');
const dnode = require('dnode');

let board = new five.Board();
let boardActive = false;
let temperature = false;

var server = dnode({
  getTemperature : function (cb) {
    if (boardActive) {
      cb(temperature.celsius);  
    } else {
      cb();
    }
  }
});
server.listen(1337);

board.on('ready', function () {
  boardActive = true;
  temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });
});

