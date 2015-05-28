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
  var leftSpeed;
  var rightSpeed;
  var normalizedAngle = 2 * Math.atan(y / x) / (Math.PI / 2);
  if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
    leftSpeed = 0;
    rightSpeed = 0;
  } else if (x >= 0 && y >= 0) {
    rightSpeed = 1;
    leftSpeed = 1 - normalizedAngle;
  } else if (x < 0 && y >= 0) {
    rightSpeed = -1 - normalizedAngle;
    leftSpeed = 1;
  } else if (x < 0 && y < 0) {
    rightSpeed = -1;
    leftSpeed = 1 - normalizedAngle;
  } else if (x >= 0 && y < 0) {
    rightSpeed = 1 + normalizedAngle;
    leftSpeed = -1;
  }

  leftSpeed *= 255;
  rightSpeed *= 255;

  console.log("speed", leftSpeed, rightSpeed);
  if (leftSpeed < 1) {
    this.portMotor.reverse(-leftSpeed);
  } else {
    this.portMotor.forward(leftSpeed);
  }
  if (rightSpeed < 1) {
    this.starboardMotor.forward(-rightSpeed);
  } else {
    this.starboardMotor.reverse(rightSpeed);
  }
};
