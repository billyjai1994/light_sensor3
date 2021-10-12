basic.forever(function on_forever() {
    led.plotBarGraph(pins.analogReadPin(AnalogPin.P1), 1023)
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        music.playTone(Note.C, 500)
    }
    
})
