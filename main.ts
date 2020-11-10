basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                basic.pause(200)
                led.plot(4 - i, j)
            } else {
                basic.pause(200)
                led.plot(5 - j, i)
                led.plot(4 - i, j)
            }
        }
    }
})
