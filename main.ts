let P = 0
let level = 0
input.onPinPressed(TouchPin.P0, function () {
    P = randint(0, 99)
    basic.showNumber(P)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
input.onButtonPressed(Button.B, function () {
    level = input.lightLevel()
    basic.showNumber(level)
})
basic.forever(function () {
    if (input.temperature() < 18) {
        led.setBrightness(70)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (input.temperature() >= 18 && input.temperature() <= 24) {
        led.setBrightness(150)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (input.temperature() >= 24) {
        led.setBrightness(255)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
