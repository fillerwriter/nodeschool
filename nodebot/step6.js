"use strict";

const five = require('johnny-five');
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

let board = new five.Board();
let boardReady = false;

let buzzer = false;

server.on('message', function(msg) {
  playSound();
});

server.bind(1337);

board.on('ready', function () {
  boardReady = true;
  buzzer = new five.Piezo(8);
});

function playSound() {
  if (boardReady) {
    buzzer.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
      song: [
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["A4", 1 / 4],
        [null, 1 / 4],
        ["A4", 1],
        ["G4", 1],
        [null, 1 / 2],
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["G4", 1 / 4],
        [null, 1 / 4],
        ["G4", 1],
        ["F4", 1],
        [null, 1 / 2]
      ],
      tempo: 100
    });
  }
}
