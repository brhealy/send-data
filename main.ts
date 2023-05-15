radio.setGroup(12)
basic.forever(function () {
    radio.sendValue("Force", input.acceleration(Dimension.Strength))
})
