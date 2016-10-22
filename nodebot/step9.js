"use strict";

const five = require('johnny-five');

let board = new five.Board();

board.on('ready', function () {
  let buzzer = new five.Piezo(9);
  let temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });
  let led = new five.Led(13);
  let shutoffButton = new five.Button(5);

  var shitsOnFireYo = false;
  let muteAlarm = false;

  temperature.on("change", function() {
    console.log("temp", this.celsius);
    if (this.celsius > 50) {
      shitsOnFireYo =  true;
    } else {
      shitsOnFireYo = false;
      muteAlarm = false;
    }
    soundAlarm();
  });

  function soundAlarm() {
    console.log("sound alarm", shitsOnFireYo);
    if (shitsOnFireYo && !muteAlarm) {
      buzzer.tone(five.Piezo.Notes.c4, 750);
      led.blink(1000);
    } else {
      console.log("turn off");
      buzzer.off();
      led.off();
    }
  }
});

