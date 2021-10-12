def on_forever():
    led.plot_bar_graph(pins.analog_read_pin(AnalogPin.P1), 1023)
    if pins.analog_read_pin(AnalogPin.P1) > 500:
        music.play_tone(Note.C, 500)
basic.forever(on_forever)
