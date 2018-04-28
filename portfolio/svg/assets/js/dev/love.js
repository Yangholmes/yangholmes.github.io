/**
 * [description]
 * @file
 * @author Yangholmes 2018-04-26 Shunde
 */
(function () {
    timer();
    eventAgent();
})();

function timer() {
    window.setInterval(function () {
        let thatDay = new Date('2018-02-11 17:00:00');
        let now = new Date();
        let time = now - thatDay;
        drawTimer(time);
    }, 1000);
}

function drawTimer(time) {
    let clock = $('#clock');
    let day = Math.floor(time / 1000 / 60 / 60 / 24);
    let hour = Math.floor(time / 1000 / 60 / 60 - day * 24);
    let minute = Math.floor(time / 1000 / 60 - hour * 60 - day * 24 * 60);
    let second = Math.floor(time / 1000 - minute * 60 - hour * 60 * 60 - day * 24 * 60 * 60);

    clock.html(`
        ${day}天
        ${hour}小时
        ${minute}分钟
        ${second}秒钟
    `);
}

function eventAgent() {
    // 给我打电话
    $('.call-me').on('touchstart', e => {
        let call = window.open('tel://15989158349');
        window.setTimeout(() => call.close(), 0);
    });
    $('.my-darling').click(e => {});
    $('.show-heart').on('touchstart', e => {
        let position = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
        $('<img src="icon-32.png" alt="爱你">').css({
            width: 16,
            height: 16,
            display: 'none',
            position: 'absolute',
            top: position.y,
            left: position.x
        }).appendTo($('body')).fadeIn(500, function () {
            $(this).fadeOut(500);
        });
    });
    $('.poem').click(e => {});
}

function datetimeFormat(dt = new Date(), format = 'Y-M-d H:i') {
    let year = dt.getFullYear().toString();
    let month = (dt.getMonth() + 1).toString().replace(/(^\d{1}$)/, '0$1');
    let date = dt.getDate().toString().replace(/(^\d{1}$)/, '0$1');
    let hour = dt.getHours().toString().replace(/(^\d{1}$)/, '0$1');
    let minutes = dt.getMinutes().toString().replace(/(^\d{1}$)/, '0$1');
    return format.replace('Y', year)
        .replace('M', month)
        .replace('d', date)
        .replace('H', hour)
        .replace('i', minutes);
}
