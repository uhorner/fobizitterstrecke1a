// Ereignis Pin 0 geschlossen (Zitterstrecke berührt)
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
})
// Ereignis Pin 2 geschlossen (Ziel erreicht)
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Happy)
})
// Startbedingungen
basic.clearScreen()
basic.showIcon(IconNames.Yes)
