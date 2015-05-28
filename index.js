/*eslint-env node */
"use strict";

var Spark = require("spark-io");
var five = require("johnny-five");
var heya = require("heya");
var MotorBot = require("./motor-bot");

var board = new five.Board({
  io: new Spark({
    token: process.env.SPARK_TOKEN,
    deviceId: process.env.SPARK_DEVICE_ID
  })
});

board.on("ready", function() {
    // Create a new `motor` hardware instance.
    var portMotor = new five.Motor({
        pins: {
            pwm: "A0",
            dir: "D0",
            cdir: "D1"
        }
    });
    var starboardMotor = new five.Motor({
        pins: {
            pwm: "A1",
            dir: "D2",
            cdir: "D3"
        }
    });

    heya.create({
      controller: new heya.controllers.WebKeyboard(),
      driver: new MotorBot({
            board: board,
            portMotor: portMotor,
            starboardMotor: starboardMotor
        })
    });
});
