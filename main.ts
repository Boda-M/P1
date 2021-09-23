let Nr = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 30; index++) {
        Nr = randint(1, 7)
        basic.clearScreen()
        DrawNumber(Nr)
        basic.pause(index * 12)
        if (index == 30) {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.pause(300)
                basic.clearScreen()
                basic.pause(300)
                DrawNumber(Nr)
            }
        }
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
