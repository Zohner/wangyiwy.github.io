const hour_ones_top = document.getElementById('hour_ones_top');
const hour_ones_bottom = document.getElementById('hour_ones_bottom');
const hour_tens_top = document.getElementById('hour_tens_top');
const hour_tens_bottom = document.getElementById('hour_tens_bottom');
const minute_ones_top = document.getElementById('minute_ones_top');
const minute_ones_bottom = document.getElementById('minute_ones_bottom');
const minute_tens_top = document.getElementById('minute_tens_top');
const minute_tens_bottom = document.getElementById('minute_tens_bottom');
const second_tens_top = document.getElementById('second_tens_top');
const second_tens_bottom = document.getElementById('second_tens_bottom');
const second_ones_top = document.getElementById('second_ones_top');
const second_ones_bottom = document.getElementById('second_ones_bottom');

setInterval(function () {
    let tempo = new Date();
    let seconds = tempo.getSeconds();
    let minutes = tempo.getMinutes();
    let hours = tempo.getHours();

    if (hours >= 12) {
        document.getElementById('AMorPM').innerHTML = "PM";
    } else {
        document.getElementById('AMorPM').innerHTML = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }


    if (hours >= 0) {
        hour_ones_top.classList.remove('one_top3');
        hour_ones_bottom.classList.remove('one_bottom3');
        hour_ones_top.classList.add('zero_top3');
        hour_ones_bottom.classList.add('zero_bottom3');
    }


    if (hours >= 10) {
        hour_ones_top.classList.remove('zero_top3');
        hour_ones_bottom.classList.remove('zero_bottom3');
        hour_ones_top.classList.add('one_top3');
        hour_ones_bottom.classList.add('one_bottom3');
    }


    if (hours === 0 || hours === 10) {
        hour_tens_top.classList.remove('nine_top3');
        hour_tens_bottom.classList.remove('nine_bottom3');
        hour_tens_top.classList.add('zero_top3');
        hour_tens_bottom.classList.add('zero_bottom3');
    }

    if (hours === 1 || hours === 11) {
        hour_tens_top.classList.remove('zero_top3');
        hour_tens_bottom.classList.remove('zero_bottom3');
        hour_tens_top.classList.add('one_top3');
        hour_tens_bottom.classList.add('one_bottom3');
    }

    if (hours === 2 || hours === 12) {
        hour_tens_top.classList.remove('one_top3');
        hour_tens_bottom.classList.remove('one_bottom3');
        hour_tens_top.classList.add('two_top3');
        hour_tens_bottom.classList.add('two_bottom3');
    }

    if (hours === 3) {
        hour_tens_top.classList.remove('two_top3');
        hour_tens_bottom.classList.remove('two_bottom3');
        hour_tens_top.classList.add('three_top3');
        hour_tens_bottom.classList.add('three_bottom3');
    }

    if (hours === 4) {
        hour_tens_top.classList.remove('three_top3');
        hour_tens_bottom.classList.remove('three_bottom3');
        hour_tens_top.classList.add('four_top3');
        hour_tens_bottom.classList.add('four_bottom3');
    }

    if (hours === 5) {
        hour_tens_top.classList.remove('four_top3');
        hour_tens_bottom.classList.remove('four_bottom3');
        hour_tens_top.classList.add('five_top3');
        hour_tens_bottom.classList.add('five_bottom3');
    }

    if (hours === 6) {
        hour_tens_top.classList.remove('five_top3');
        hour_tens_bottom.classList.remove('five_bottom3');
        hour_tens_top.classList.add('six_top3');
        hour_tens_bottom.classList.add('six_bottom3');
    }

    if (hours === 7) {
        hour_tens_top.classList.remove('six_top3');
        hour_tens_bottom.classList.remove('six_bottom3');
        hour_tens_top.classList.add('seven_top3');
        hour_tens_bottom.classList.add('seven_bottom3');
    }

    if (hours === 8) {
        hour_tens_top.classList.remove('seven_top3');
        hour_tens_bottom.classList.remove('seven_bottom3');
        hour_tens_top.classList.add('eight_top3');
        hour_tens_bottom.classList.add('eight_bottom3');
    }

    if (hours === 9) {
        hour_tens_top.classList.remove('eight_top3');
        hour_tens_bottom.classList.remove('eight_bottom3');
        hour_tens_top.classList.add('nine_top3');
        hour_tens_bottom.classList.add('nine_bottom3');
    }


    if (minutes >= 0) {
        minute_ones_top.classList.remove('five_top2');
        minute_ones_bottom.classList.remove('five_bottom2');
        minute_ones_top.classList.add('zero_top2');
        minute_ones_bottom.classList.add('zero_bottom2');
    }


    if (minutes >= 10) {
        minute_ones_top.classList.remove('zero_top2');
        minute_ones_bottom.classList.remove('zero_bottom2');
        minute_ones_top.classList.add('one_top2');
        minute_ones_bottom.classList.add('one_bottom2');
    }

    if (minutes >= 20) {
        minute_ones_top.classList.remove('one_top2');
        minute_ones_bottom.classList.remove('one_bottom2');
        minute_ones_top.classList.add('two_top2');
        minute_ones_bottom.classList.add('two_bottom2');
    }

    if (minutes >= 30) {
        minute_ones_top.classList.remove('two_top2');
        minute_ones_bottom.classList.remove('two_bottom2');
        minute_ones_top.classList.add('three_top2');
        minute_ones_bottom.classList.add('three_bottom2');
    }

    if (minutes >= 40) {
        minute_ones_top.classList.remove('three_top2');
        minute_ones_bottom.classList.remove('three_bottom2');
        minute_ones_top.classList.add('four_top2');
        minute_ones_bottom.classList.add('four_bottom2');
    }

    if (minutes >= 50) {
        minute_ones_top.classList.remove('four_top2');
        minute_ones_bottom.classList.remove('four_bottom2');
        minute_ones_top.classList.add('five_top2');
        minute_ones_bottom.classList.add('five_bottom2');
    }


    if (minutes === 0 || minutes === 10 || minutes === 20 || minutes === 30 || minutes === 40 || minutes === 50) {
        minute_tens_top.classList.remove('nine_top2');
        minute_tens_bottom.classList.remove('nine_bottom2');
        minute_tens_top.classList.add('zero_top2');
        minute_tens_bottom.classList.add('zero_bottom2');
    }

    if (minutes === 1 || minutes === 11 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
        minute_tens_top.classList.remove('zero_top2');
        minute_tens_bottom.classList.remove('zero_bottom2');
        minute_tens_top.classList.add('one_top2');
        minute_tens_bottom.classList.add('one_bottom2');
    }

    if (minutes === 2 || minutes === 12 || minutes === 22 || minutes === 32 || minutes === 42 || minutes === 52) {
        minute_tens_top.classList.remove('one_top2');
        minute_tens_bottom.classList.remove('one_bottom2');
        minute_tens_top.classList.add('two_top2');
        minute_tens_bottom.classList.add('two_bottom2');
    }

    if (minutes === 3 || minutes === 13 || minutes === 23 || minutes === 33 || minutes === 43 || minutes === 53) {
        minute_tens_top.classList.remove('two_top2');
        minute_tens_bottom.classList.remove('two_bottom2');
        minute_tens_top.classList.add('three_top2');
        minute_tens_bottom.classList.add('three_bottom2');
    }

    if (minutes === 4 || minutes === 14 || minutes === 24 || minutes === 34 || minutes === 44 || minutes === 54) {
        minute_tens_top.classList.remove('three_top2');
        minute_tens_bottom.classList.remove('three_bottom2');
        minute_tens_top.classList.add('four_top2');
        minute_tens_bottom.classList.add('four_bottom2');
    }

    if (minutes === 5 || minutes === 15 || minutes === 25 || minutes === 35 || minutes === 45 || minutes === 55) {
        minute_tens_top.classList.remove('four_top2');
        minute_tens_bottom.classList.remove('four_bottom2');
        minute_tens_top.classList.add('five_top2');
        minute_tens_bottom.classList.add('five_bottom2');
    }

    if (minutes === 6 || minutes === 16 || minutes === 26 || minutes === 36 || minutes === 46 || minutes === 56) {
        minute_tens_top.classList.remove('five_top2');
        minute_tens_bottom.classList.remove('five_bottom2');
        minute_tens_top.classList.add('six_top2');
        minute_tens_bottom.classList.add('six_bottom2');
    }

    if (minutes === 7 || minutes === 17 || minutes === 27 || minutes === 37 || minutes === 47 || minutes === 57) {
        minute_tens_top.classList.remove('six_top2');
        minute_tens_bottom.classList.remove('six_bottom2');
        minute_tens_top.classList.add('seven_top2');
        minute_tens_bottom.classList.add('seven_bottom2');
    }

    if (minutes === 8 || minutes === 18 || minutes === 28 || minutes === 38 || minutes === 48 || minutes === 58) {
        minute_tens_top.classList.remove('seven_top2');
        minute_tens_bottom.classList.remove('seven_bottom2');
        minute_tens_top.classList.add('eight_top2');
        minute_tens_bottom.classList.add('eight_bottom2');
    }

    if (minutes === 9 || minutes === 19 || minutes === 29 || minutes === 39 || minutes === 49 || minutes === 59) {
        minute_tens_top.classList.remove('eight_top2');
        minute_tens_bottom.classList.remove('eight_bottom2');
        minute_tens_top.classList.add('nine_top2');
        minute_tens_bottom.classList.add('nine_bottom2');
    }


    if (seconds >= 0) {
        second_ones_top.classList.remove('five_top1');
        second_ones_bottom.classList.remove('five_bottom1');
        second_ones_top.classList.add('zero_top1');
        second_ones_bottom.classList.add('zero_bottom1');
    }

    if (seconds >= 10) {
        second_ones_top.classList.remove('zero_top1');
        second_ones_bottom.classList.remove('zero_bottom1');
        second_ones_top.classList.add('one_top1');
        second_ones_bottom.classList.add('one_bottom1');
    }

    if (seconds >= 20) {
        second_ones_top.classList.remove('one_top1');
        second_ones_bottom.classList.remove('one_bottom1');
        second_ones_top.classList.add('two_top1');
        second_ones_bottom.classList.add('two_bottom1');
    }

    if (seconds >= 30) {
        second_ones_top.classList.remove('two_top1');
        second_ones_bottom.classList.remove('two_bottom1');
        second_ones_top.classList.add('three_top1');
        second_ones_bottom.classList.add('three_bottom1');
    }

    if (seconds >= 40) {
        second_ones_top.classList.remove('three_top1');
        second_ones_bottom.classList.remove('three_bottom1');
        second_ones_top.classList.add('four_top1');
        second_ones_bottom.classList.add('four_bottom1');
    }

    if (seconds >= 50) {
        second_ones_top.classList.remove('four_top1');
        second_ones_bottom.classList.remove('four_bottom1');
        second_ones_top.classList.add('five_top1');
        second_ones_bottom.classList.add('five_bottom1');
    }


    if (seconds === 0 || seconds === 10 || seconds === 20 || seconds === 30 || seconds === 40 || seconds === 50) {
        second_tens_top.classList.remove('nine_top1');
        second_tens_bottom.classList.remove('nine_bottom1');
        second_tens_top.classList.add('zero_top1');
        second_tens_bottom.classList.add('zero_bottom1');
    }

    if (seconds === 1 || seconds === 11 || seconds === 21 || seconds === 31 || seconds === 41 || seconds === 51) {
        second_tens_top.classList.remove('zero_top1');
        second_tens_bottom.classList.remove('zero_bottom1');
        second_tens_top.classList.add('one_top1');
        second_tens_bottom.classList.add('one_bottom1');
    }

    if (seconds === 2 || seconds === 12 || seconds === 22 || seconds === 32 || seconds === 42 || seconds === 52) {
        second_tens_top.classList.remove('one_top1');
        second_tens_bottom.classList.remove('one_bottom1');
        second_tens_top.classList.add('two_top1');
        second_tens_bottom.classList.add('two_bottom1');
    }

    if (seconds === 3 || seconds === 13 || seconds === 23 || seconds === 33 || seconds === 43 || seconds === 53) {
        second_tens_top.classList.remove('two_top1');
        second_tens_bottom.classList.remove('two_bottom1');
        second_tens_top.classList.add('three_top1');
        second_tens_bottom.classList.add('three_bottom1');
    }

    if (seconds === 4 || seconds === 14 || seconds === 24 || seconds === 34 || seconds === 44 || seconds === 54) {
        second_tens_top.classList.remove('three_top1');
        second_tens_bottom.classList.remove('three_bottom1');
        second_tens_top.classList.add('four_top1');
        second_tens_bottom.classList.add('four_bottom1');
    }

    if (seconds === 5 || seconds === 15 || seconds === 25 || seconds === 35 || seconds === 45 || seconds === 55) {
        second_tens_top.classList.remove('four_top1');
        second_tens_bottom.classList.remove('four_bottom1');
        second_tens_top.classList.add('five_top1');
        second_tens_bottom.classList.add('five_bottom1');
    }

    if (seconds === 6 || seconds === 16 || seconds === 26 || seconds === 36 || seconds === 46 || seconds === 56) {
        second_tens_top.classList.remove('five_top1');
        second_tens_bottom.classList.remove('five_bottom1');
        second_tens_top.classList.add('six_top1');
        second_tens_bottom.classList.add('six_bottom1');
    }

    if (seconds === 7 || seconds === 17 || seconds === 27 || seconds === 37 || seconds === 47 || seconds === 57) {
        second_tens_top.classList.remove('six_top1');
        second_tens_bottom.classList.remove('six_bottom1');
        second_tens_top.classList.add('seven_top1');
        second_tens_bottom.classList.add('seven_bottom1');
    }

    if (seconds === 8 || seconds === 18 || seconds === 28 || seconds === 38 || seconds === 48 || seconds === 58) {
        second_tens_top.classList.remove('seven_top1');
        second_tens_bottom.classList.remove('seven_bottom1');
        second_tens_top.classList.add('eight_top1');
        second_tens_bottom.classList.add('eight_bottom1');
    }

    if (seconds === 9 || seconds === 19 || seconds === 29 || seconds === 39 || seconds === 49 || seconds === 59) {
        second_tens_top.classList.remove('eight_top1');
        second_tens_bottom.classList.remove('eight_bottom1');
        second_tens_top.classList.add('nine_top1');
        second_tens_bottom.classList.add('nine_bottom1');
    }
});