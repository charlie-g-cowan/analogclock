setInterval(test, 100);

jQuery.fn.rotate = function (degrees) {
    $(this).css({
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
    });
};


function test() {
    $('#s').rotate(clock("s"));
    $('#m').rotate(clock("m"));
    $('#h').rotate(clock("h"));
}

function clock(type) {
    var d = new Date();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var sec = seconds * 6;
    var min = minutes * 6;
    var i = 60 / minutes;
    var j = 1 / i;
    var addtohrs = j * 30;
    if (hours > 12) {
        var h = hours - 12;
        var hr = h * 30;
    } else {
        var hr = hours * 30;
    }
    var hrs = hr + addtohrs;
    switch (type) {
        case "h":
            var angle = hrs;
            break;
        case "m":
            var angle = min;
            break;
        case "s":
            var angle = sec;
            break;
        default:
            var angle = 0;
            break;
    }
    return angle + 180;
}