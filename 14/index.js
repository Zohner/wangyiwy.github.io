let $group1 = $('.group:first'),
    cssClasses = $group1.attr('class') + ' num-',
    $clock = $('#clock'),
    $newDots = $('.dots').clone();

$('.dots').remove();

$clock.append(
    $group1.clone().attr('id', 'num-2'),
    $newDots,
    $group1.clone().attr('id', 'num-3'),
    $group1.clone().attr('id', 'num-4'),
    $newDots.clone(),
    $group1.clone().attr('id', 'num-6'),
    $group1.clone().attr('id', 'num-5'),
    '<br style="clear:both" />'
);

let $group2 = $('#num-2'),
    $group3 = $('#num-3'),
    $group4 = $('#num-4'),
    $group5 = $('#num-6'),
    $group6 = $('#num-5');

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    hours = hours.toString().split('');
    minutes = minutes.toString().split('');
    seconds = seconds.toString().split('');

    $group1.attr('class', cssClasses + hours[0]);
    $group2.attr('class', cssClasses + hours[1]);
    $group3.attr('class', cssClasses + minutes[0]);
    $group4.attr('class', cssClasses + minutes[1]);
    $group5.attr('class', cssClasses + seconds[0]);
    $group6.attr('class', cssClasses + seconds[1])
}

setInterval(updateClock, 1000);
updateClock();