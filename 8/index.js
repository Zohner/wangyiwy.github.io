var hourHand = document.querySelector('.hours'),
    minuteHand = document.querySelector('.minutes'),
    secondHand = document.querySelector('.seconds');

function localTime() {
    var currentTime = new Date();

    // Seconds
    var seconds = currentTime.getSeconds();

    var secondDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Minutes
    var minutes = currentTime.getMinutes();

    var minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6);
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;


    // Hours
    var hours = currentTime.getHours();

    var hourDeg = ((hours/12)*360) + ((minutes/60) * 30);
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

} // end of localTime function

setInterval(localTime, 1000);

localTime();
