
$('#btn-send').on('click', (e) => {
    e.preventDefault()
    let log = $('#login').val()
    let par = $('#pass').val()
    let data = { login: log, pass: par }
    console.log(data)
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/JSON',
        url: '/api/register/user'
    }).done((result) => {
        if (result) {
            console.log(result)
            $(location).attr('href', '/index')
        };
    });
})