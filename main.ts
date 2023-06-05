input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(456)
    basic.showString("B")
})
radio.setGroup(1)
basic.forever(function () {
	
})
