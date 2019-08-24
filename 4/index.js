const clock = document.querySelector('.clock');
const screen = document.querySelector('.screen');
const switcher = document.querySelector('.switcher');
const time = document.querySelector('.time');

function second_passed() {
    clock.classList.remove('is-off')
}

setTimeout(second_passed, 2000);

switcher.addEventListener('click', function (e) {
    e.preventDefault();
    screen.classList.toggle('glitch')
});

setInterval(function () {
    let now = new Date();
    let hours = now.getHours();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();

    let realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds
    time.innerHTML = realTime;
    time.setAttribute('data-time', realTime)
}, 1000);