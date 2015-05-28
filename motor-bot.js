"use strict";

function MotorBot(options) {
  this.board = options.board;
  this.portMotor = options.portMotor;
  this.starboardMotor = options.starboardMotor;
}
module.exports = MotorBot;

MotorBot.prototype.connect = function(callback) {
  console.log("connect");
  callback();
};


MotorBot.prototype.move = function move(x, y) {
  var portSpeed = x;
  var starboardSpeed = y;

  console.log("portSpeed", portSpeed, "starboardSpeed", starboardSpeed);
  if (portSpeed >= 0) {
    this.portMotor.start(portSpeed);
  } else {
    this.portMotor.reverse(-portSpeed);
  }
  if (starboardSpeed >= 0) {
      this.starboardMotor.start(starboardSpeed);
  } else {
      this.starboardMotor.reverse(-starboardSpeed);
  }
};
