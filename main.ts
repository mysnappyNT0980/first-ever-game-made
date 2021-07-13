input.onButtonPressed(Button.A, function () {
    x_yar += 1
})
input.onButtonPressed(Button.B, function () {
    y_yar += 1
})
input.onGesture(Gesture.Shake, function () {
    x_yar = 0
    y_yar = 0
    basic.clearScreen()
})
let y_yar = 0
let x_yar = 0
if (!(led.point(x_yar, y_yar))) {
    led.toggle(x_yar, y_yar)
} else {
	
}
basic.forever(function () {
	
})
