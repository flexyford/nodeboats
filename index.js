/*eslint-env node */
"use strict";

var five = require("johnny-five");
var Spark = require("spark-io");
var board = new five.Board({
  io: new Spark({
    token: process.env.SPARK_TOKEN,
    deviceId: process.env.SPARK_DEVICE_ID
  })
});

board.on("ready", function () {
  var led = new five.Led("D7");
  led.blink();
});
