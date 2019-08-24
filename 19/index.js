const radius = 6;
const clock__marks = document.querySelector('.clock__marks');
const secondElm = document.querySelector('.clock__hand--second');
const minuteElm = document.querySelector('.clock__hand--minute');
const hourElm = document.querySelector('.clock__hand--hour');

for (let i = 0; i < 60; i++) {
    clock__marks.innerHTML += '<li></li>';
}

let now = new Date();
let second = now.getSeconds() * radius;
let minute = now.getMinutes() * radius + Math.floor(second / (radius * 10) * 10) / 10;
let hour = now.getHours() * radius * 5 + Math.floor(minute / (radius * 2) * 10) / 10;

function setClockHands(second, minute, hour) {
    secondElm.style.setProperty('transform', 'rotate(' + second + 'deg)');
    minuteElm.style.setProperty('transform', 'rotate(' + minute + 'deg)');
    hourElm.style.setProperty('transform', 'rotate(' + hour + 'deg)');

    let interval = 1000;
    let before = new Date();

    setInterval(function () {
        let now = new Date();
        let elapsedTime = now.getTime() - before.getTime();
        let delay = Math.round(elapsedTime / interval);

        second += radius * delay;
        for (let i = 0; i < delay; i++) {
            if (((second - i) * radius) % (radius * 5) === 0) {
                minute += 0.5;
                if (minute % radius === 0) {
                    hour += 0.5;
                }
            }
        }

        secondElm.style.setProperty('transform', 'rotate(' + second + 'deg)');
        minuteElm.style.setProperty('transform', 'rotate(' + minute + 'deg)');
        hourElm.style.setProperty('transform', 'rotate(' + hour + 'deg)');

        before = new Date();
    }, interval);
}

setClockHands(second, minute, hour);