function clock() {
    let d = new Date();

    let day = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббта");

    let month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

    let hours = new Array('00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23')

    let minutes = new Array("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59");

    $('#clock').html(hours[d.getHours()] + ' : ' + minutes[d.getMinutes()] + ' : ' + minutes[d.getSeconds()])
    $('#week').html(day[d.getDay()] + '  ' + d.getDate() + '  ' + month[d.getMonth()] + '  ' + d.getFullYear() + 'г.');
}
setInterval(function () { clock() }, 1000);

// $('.register-button').on('click', function (e) {
//     e.preventDefault();


//     $('.register').slideToggle(400)
//     $('.sign-in').slideToggle(400)


// });

let menuLabel;

$('#menu-button').on('click', function (e) {
    e.preventDefault();

    if (!menuLabel) {
        $('#svg-icon').css('transform', 'rotateY(180deg)');
        $('.menu-list').css({ 'transition': '.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 'width': 'inherit' })
        menuLabel = !menuLabel
    }
    else {
        $('#svg-icon').css('transform', 'rotateY(0deg)');
        $('.menu-list').css({ 'transition': '.5s cubic-bezier(0.6, -0.28, 0.735, -0.045)', 'width': '0' })
        menuLabel = !menuLabel
    }
})

$('.login-button').on('click', function (e) {
    e.preventDefault();
    let form = new Object(login = $(form[name = "login"]).val(), pass = $(form[name = "pass"]).val())
    $.ajax({
        type: 'POST',
        data: JSON.stringify(form),
        contentType: 'application/JSON',
        url: '/auth'
    }).done((data) => {
        if (data.ok) {
            console.log(data)
            $(location).attr('href', '/')
        };
    });
})