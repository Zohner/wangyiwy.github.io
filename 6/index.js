function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', calcTime);
}

function calcTime() {
    const date = new Date();
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    document.querySelector('.clock-day').innerHTML = day[date.getDay()];
    document.querySelector('.clock-hours').innerHTML = addZero(hours);
    document.querySelector('.clock-minutes').innerHTML = addZero(minutes);
    document.querySelector('.clock-seconds').innerHTML = addZero(seconds);

    function addZero(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn;
        }
        return standIn;
    }
}

setInterval(calcTime, 1000);

loadEventListeners();
