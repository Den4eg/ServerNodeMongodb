// Header clock
function clock() {
    let d = new Date();

    let day = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббта");

    let month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

    let hours = new Array('00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23')

    let minutes = new Array("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59");

    $('#clock').html(hours[d.getHours()] + ' : ' + minutes[d.getMinutes()])
    $('#week').html(day[d.getDay()] + '  ' + d.getDate() + '  ' + month[d.getMonth()]);
    setTimeout(function () {
        clock()
    }, 1000);
};
clock()

// Hernya for watch
$(() => {
    $('.date-time').on('click', (e) => {
        e.preventDefault()
        $('.watch').toggleClass('color-change')
    })
})


// Header-menu animation
let menuLabel;
$('#menu-button').on('click', function (e) {
    e.preventDefault();

    if (!menuLabel) {
        $('#svg-icon').css('transform', 'rotateY(180deg)');
        $('.menu-list').css({
            'width': '100%'
        })
        menuLabel = !menuLabel
    } else {
        $('#svg-icon').css('transform', 'rotateY(0deg)');
        $('.menu-list').css({
            'width': '0'
        })
        menuLabel = !menuLabel
    }
})

// Reset errors
$('input').on('focus', () => {
    $('input').removeClass('input-error')
})
// EventListener for Registration new user
$('#btn-send-reg').on('click', function (e) {
    e.preventDefault();
    $('#login-reg').removeClass('input-error')
    $('#pass-reg').removeClass('input-error')
    let login = $('#login-reg').val()
    let pass = $('#pass-reg').val()
    let group = $('#select-reg').val()
    console.log(group)
    if (!login || !pass) {
        // Обработка пустых полей
        if (!login) {
            $('#login-reg').addClass('input-error')
        }
        if (!pass) {
            $('#pass-reg').addClass('input-error')
        }
    } else {
        $.ajax({
            type: 'POST',
            data: JSON.stringify({
                login,
                pass,
                group
            }),
            contentType: 'application/JSON',
            url: '/api/register'
        }).done((data) => {
            if (!data.ok) {
                $('#login-reg').addClass('input-error')
                $('#pass-reg').addClass('input-error')
                console.log(data);

            } else {
                // $(location).attr('href', '/')
                console.log(data)
            }
        });
    }
})


// EventListener for Sign in
$('#btn-send').on('click', function (e) {
    e.preventDefault();
    let login = $('#login').val()
    let pass = $('#pass').val()
    if (!login || !pass) {
        // Обработка пустых полей
        if (!login) {
            $('#login').addClass('input-error')
        }
        if (!pass) {
            $('#pass').addClass('input-error')
        }
    }
    // ajax request on server
    else {
        $.ajax({
            type: 'POST',
            data: JSON.stringify({
                login,
                pass
            }),
            contentType: 'application/JSON',
            url: '/api/login'
        }).done((data) => {
            if (data.ok) {
                console.log(data)
                $('#hello-user-name').css('display', 'block')
                $('.login-page').css('display', 'none')
                $('h1').html('Добро пожаловать ' + data.username)
                setTimeout(() => {
                    $(location).attr('href', '/index')
                }, 1000)
            } else {
                $('input').addClass('input-error')
            }
        });
    }
})

// New car form
$('.btn__prop').on('click', function () {
    $('.new__user').toggleClass('slide-propusk')
    $('.image__propusk').toggleClass('image__propusk__rotate')
})

/* * Main Window * */

// Current day log date

function nowDate() {
    let d = new Date();
    let month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");
    $('.now-date').html(d.getDate() + '  ' + month[d.getMonth()] + '  ' + d.getFullYear() + ' г.')
}
nowDate()