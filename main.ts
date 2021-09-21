input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 30; index++) {
        DrawNumber(randint(1, 7))
    }
})
function DrawNumber (szám: number) {
    if (szám == 1) {
        led.plot(2, 2)
    } else if (szám == 2) {
        led.plot(4, 0)
        led.plot(0, 4)
    } else if (szám == 3) {
        led.plot(0, 4)
        led.plot(2, 2)
        led.plot(4, 0)
    } else if (szám == 4) {
        led.plot(0, 0)
        led.plot(4, 0)
        led.plot(0, 4)
        led.plot(4, 4)
    } else if (szám == 5) {
        led.plot(0, 0)
        led.plot(4, 0)
        led.plot(0, 4)
        led.plot(4, 4)
        led.plot(2, 2)
    } else {
        led.plot(0, 0)
        led.plot(0, 2)
        led.plot(0, 4)
        led.plot(4, 0)
        led.plot(4, 2)
        led.plot(4, 4)
    }
}
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
