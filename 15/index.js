const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');
const time = document.querySelector('.time');

function refresh() {
    let now = new Date();
    let second = now.getSeconds();
    let secondDeg = ((second / 60) * 360) + 360;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    let minute = now.getMinutes();
    let minuteDeg = ((minute / 60) * 360);
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    let hour = now.getHours();
    let hourDeg = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second + '</small>' + '</span>';

    setTimeout(refresh, 1000)
}

refresh();