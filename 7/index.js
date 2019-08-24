function updateClock() {
    var d = new Date();

    var time = (d.getHours() > 9 ? d.getHours() : "0" + d.getHours()) + ":" + (d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes()) + ":" + (d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds());

    document.getElementById("cube").style.transform = "rotateX(" + randSign() + Math.floor((Math.random() * 35) + 0) + "deg) rotateY(" + randSign() + Math.floor((Math.random() * 35) + 0) + "deg)";

    document.getElementById("cube").style.webkitTransform = "rotateX(" + randSign() + Math.floor((Math.random() * 35) + 0) + "deg) rotateY(" + randSign() + Math.floor((Math.random() * 35) + 0) + "deg)";

    document.getElementById("cube").style.top = Math.floor((Math.random() * (window.innerHeight - 175)) + 5) + "px";
    document.getElementById("cube").style.left = Math.floor((Math.random() * (window.innerWidth - 425)) + 1) + "px";

    document.getElementById("clock").innerHTML = time;

    var color = Math.floor((Math.random() * 255) + 50) + "," + Math.floor((Math.random() * 255) + 50) + "," + Math.floor((Math.random() * 255) + 50);

    document.getElementById("clock").style.color = "rgb(" + color + ")";

    var sides = document.getElementsByClassName("side");
    for (var i = 0, il = sides.length; i < il; i++) {
        sides[i].style.borderColor = "rgba(" + color + ",.5)";
    }
    window.setTimeout(function () {
        updateClock();
    }, 1000);
}

function randSign() {
    if (Math.random() > .5)
        return "-";
    else
        return "";
}

updateClock();