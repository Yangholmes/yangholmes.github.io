'use strict';

/**
 * [description]
 * @file
 * @author Yangholmes 2018-04-26 Shunde
 */
(function () {
    timer();
    var mask = $('.mask');
})();

function timer() {
    window.setInterval(function () {
        var thatDay = new Date('2018-02-11 17:00:00');
        var now = new Date();
        var time = now - thatDay;
        drawTimer(time);
    }, 1000);
}

function drawTimer(time) {
    var clock = $('#clock');
    var day = Math.floor(time / 1000 / 60 / 60 / 24);
    var hour = Math.floor(time / 1000 / 60 / 60 - day * 24);
    var minute = Math.floor(time / 1000 / 60 - hour * 60 - day * 24 * 60);
    var second = Math.floor(time / 1000 - minute * 60 - hour * 60 * 60 - day * 24 * 60 * 60);

    clock.html('\n        ' + day + '\u5929\n        ' + hour + '\u5C0F\u65F6\n        ' + minute + '\u5206\u949F\n        ' + second + '\u79D2\u949F\n    ');
}

function datetimeFormat() {
    var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-M-d H:i';

    var year = dt.getFullYear().toString();
    var month = (dt.getMonth() + 1).toString().replace(/(^\d{1}$)/, '0$1');
    var date = dt.getDate().toString().replace(/(^\d{1}$)/, '0$1');
    var hour = dt.getHours().toString().replace(/(^\d{1}$)/, '0$1');
    var minutes = dt.getMinutes().toString().replace(/(^\d{1}$)/, '0$1');
    return format.replace('Y', year).replace('M', month).replace('d', date).replace('H', hour).replace('i', minutes);
}