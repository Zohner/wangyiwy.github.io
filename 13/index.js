for (var i = 0; i <= 60; i++) {
    $('.clock').append('<div class="secondMarks" id="_' + i + '"></div>');
    $('#_' + i).css({
        '-webkit-transform': 'rotate(' + i * 6 + 'deg)',
        '-moz-transform': 'rotate(' + i * 6 + 'deg)'
    });

    if (i % 5 == 0 && i != 60) {
        $('.clock').append('<div class="five" id="five_' + i + '"><div class="fiveChild glow-js"></div></div>').append('<div class="oneToTwelve" id="oneToTwelve_' + i + '">' + i / 5 + '</div>').append('<div class="twelveToTwentyfour" id="twelveToTwentyfour_' + i + '">' + (i / 5 + 12) + '</div>');
        $('#five_' + i).css({
            '-webkit-transform': 'rotate(' + i * 6 + 'deg)',
            '-moz-transform': 'rotate(' + i * 6 + 'deg)'
        });
    }
}

$(function () {
    $('#oneToTwelve_0').text('12');
    $('#twelveToTwentyfour_0').text('24');

    setInterval(function () {
        var seconds = new Date().getSeconds();
        var minutes = new Date().getMinutes();
        var hours = new Date().getHours();
        var secDegree = seconds * 6 - 90;
        var minDegree = minutes * 6 - 90;
        var hourDegree = hours * 30 + (minutes / 2) - 90;

        $("#seconds").css({
            "transform": "rotate(" + secDegree + "deg)",
            " -webkit-transform": "rotate(" + secDegree + "deg)",
            " -moz-transform": "rotate(" + secDegree + "deg)",
            " -ms-transform": "rotate(" + secDegree + "deg)",
            " -o-transform": "rotate(" + secDegree + "deg)"
        });
        $("#minutes").css({
            "transform": "rotate(" + minDegree + "deg)",
            " -webkit-transform": "rotate(" + minDegree + "deg)",
            " -moz-transform": "rotate(" + minDegree + "deg)",
            " -ms-transform": "rotate(" + minDegree + "deg)",
            " -o-transform": "rotate(" + minDegree + "deg)"
        });
        $("#hours").css({
            "transform": "rotate(" + hourDegree + "deg)",
            " -webkit-transform": "rotate(" + hourDegree + "deg)",
            " -moz-transform": "rotate(" + hourDegree + "deg)",
            " -ms-transform": "rotate(" + hourDegree + "deg)",
            " -o-transform": "rotate(" + hourDegree + "deg)"
        });
    }, 1000);

    $('.onoffswitch').on('click', function () {

        var minutes = new Date().getMinutes();
        var hours = new Date().getHours();
        var hourDegree = hours * 30 + (minutes / 2) - 90;

        setTimeout(function () {
            if ($('#myonoffswitch').is(':checked')) {
                $('.glow-js').addClass('glow');
                var m;
                if (minutes < 31) m = 0
                else m = 1;
                if (hours > 12) {
                    var h = hours + m - 12;
                    $('#five_' + (h * 5)).children().removeClass('glow').addClass('glow-red');
                } else {
                    $('#five_' + (hours + m) * 5).children().removeClass('glow').addClass('glow-red');
                }
            } else {
                $('.glow-js').removeClass('glow glow-red');
            }
        }, 400);
    });
});