"use strict";

const five = require('johnny-five');

let board = new five.Board();
let buzzer = false;

board.on('ready', function () {
  buzzer = new five.Piezo(8);
  playSound();
});

function playSound() {
    buzzer.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
      song: [
        ["G2", 1/2],
        ["A2", 1/2],
        ["C3", 5/4],
        [null, 1/2],
        ["G2", 1/2],
        ["A2", 1/2],
        ["D3", 5/4],
        [null, 1/2],
        ["G2", 1/2],
        ["A2", 1/2],
        ["F2", 7/4],
        [null, 1/4],
        ["F2", 1/2],
        ["G2", 1/2],
        ["D3", 7/4],
        [null, 5/4],
        ["G6", 1/4],
        [null, 1/8],
        ["G6", 1/4],
        [null, 1/8],
        ["G6", 1/2],
        [null, 1/8]
        [null, 1]
      ],
      tempo: 120
    }, playSound);
}
