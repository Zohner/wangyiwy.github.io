const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const yearE = document.querySelector('.year');
const monthE = document.querySelector('.month');
const dayE = document.querySelector('.day');
const hourE = document.querySelector('.hour');
const minutesE = document.querySelector('.minutes');
const secondsE = document.querySelector('.seconds');

function refresh() {
    let now = new Date();

    let hour = now.getHours();
    hourE.innerHTML = hour < 10 ? '0' + hour : '' + hour;
    let minutes = now.getMinutes();
    minutesE.innerHTML = minutes < 10 ? '0' + minutes : '' + minutes;

    let seconds = now.getSeconds();
    secondsE.innerHTML = seconds < 10 ? '0' + seconds : '' + seconds;

    let dow = weekday[now.getDay()];
    let mo = month[now.getMonth()];
    let num = now.getDate();
    let date = mo + ' ' + num;
    let yr = now.getFullYear();

    dayE.innerHTML = dow;
    monthE.innerHTML = date;
    yearE.innerHTML = '' + yr;

    setTimeout(refresh, 1000)
}

refresh();