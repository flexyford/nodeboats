/*eslint-env node */
"use strict";

var Spark = require("spark-io");
var five = require("johnny-five");

var board, motor, motor2;

board = new five.Board({
  io: new Spark({
    token: process.env.SPARK_TOKEN,
    deviceId: process.env.SPARK_DEVICE_ID
  })
});

board.on("ready", function() {
    // Create a new `motor` hardware instance.
    motor = new five.Motor({
        pins: {
            pwm: "A0",
            dir: "D0",
            cdir: "D1"
        }
    });
    motor2 = new five.Motor({
        pins: {
            pwm: "A1",
            dir: "D2",
            cdir: "D3"
        }
    });

    // Inject the `motor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        motor: motor,
        motor2: motor2
    });

    // Motor Event API

    // "start" events fire when the motor is started.
    motor.on("start", function() {
        console.log("start");

        // Demonstrate motor stop in 2 seconds
        board.wait(20000, function() {
            motor.stop();
        });
    });
    motor2.on("start", function() {
        console.log("start2");

        // Demonstrate motor stop in 2 seconds
        board.wait(20000, function() {
            motor2.stop();
        });
    });

    // "stop" events fire when the motor is started.
    motor.on("stop", function() {
        console.log("stop");
    });
    motor2.on("stop", function() {
        console.log("stop2");
    });

    // Motor API

    // start([speed)
    // Start the motor. `isOn` property set to |true|
    // Takes an optional parameter `speed` [0-255]
    // to define the motor speed if a PWM Pin is
    // used to connect the motor.
    motor.start(255);
    motor2.start(255);

    // stop()
    // Stop the motor. `isOn` property set to |false|
});
