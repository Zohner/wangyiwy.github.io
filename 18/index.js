var charMap = {
    0: [
        0, 1, 1, 0,
        1, 0, 0, 1,
        1, 0, 0, 1,
        1, 0, 0, 1,
        0, 1, 1, 0
    ],
    1: [
        0, 0, 1, 0,
        0, 1, 1, 0,
        1, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0
    ],
    2: [
        0, 1, 1, 0,
        1, 0, 0, 1,
        0, 0, 1, 0,
        0, 1, 0, 0,
        1, 1, 1, 1
    ],
    3: [
        1, 1, 1, 1,
        0, 0, 0, 1,
        1, 1, 1, 1,
        0, 0, 0, 1,
        1, 1, 1, 1
    ],
    4: [
        1, 0, 0, 0,
        1, 0, 1, 0,
        1, 0, 1, 0,
        1, 1, 1, 1,
        0, 0, 1, 0
    ],
    5: [
        1, 1, 1, 1,
        1, 0, 0, 0,
        1, 1, 1, 1,
        0, 0, 0, 1,
        1, 1, 1, 1
    ],
    6: [
        1, 1, 1, 1,
        1, 0, 0, 0,
        1, 1, 1, 1,
        1, 0, 0, 1,
        1, 1, 1, 1
    ],
    7: [
        1, 1, 1, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1
    ],
    8: [
        1, 1, 1, 1,
        1, 0, 0, 1,
        1, 1, 1, 1,
        1, 0, 0, 1,
        1, 1, 1, 1
    ],
    9: [
        1, 1, 1, 1,
        1, 0, 0, 1,
        1, 1, 1, 1,
        0, 0, 0, 1,
        1, 1, 1, 1
    ],
    ":": [
        0, 0, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

function transform (text, className) {
    text = text || "12345"
    var transformed = ""

    ;[].forEach.call(text, function (letter) {
        var letterMarkup = ""
        var digit = charMap[letter]
        digit.forEach(function (bit) {
            letterMarkup += "<span class='bit " + (bit ? "filled" : "") + "'></span>"
        })
        transformed += ("<div class='letter " + className + "'>" +
            letterMarkup +
            "</div>")
    })

    return transformed
}

function zeroPad (text) {
    return ("0" + text).slice(-2)
}

function write (DOMstr) {
    var display = document.getElementById("screen")
    display.innerHTML = ""
    display.innerHTML = DOMstr
}

function clock () {
    var date = new Date()
    var hours = zeroPad(date.getHours())
    var minutes = zeroPad(date.getMinutes())
    var seconds = zeroPad(date.getSeconds())

    write(
        transform(hours, "hours") +
        transform(":", "colons") +
        transform(minutes, "minutes") +
        transform(":", "colons") +
        transform(seconds, "seconds")
    )
}

clock()
setInterval(clock, 1000)
