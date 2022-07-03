
function time() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var dia = data.getDate()
    var ano = data.getFullYear()
    var mes = data.toLocaleString('pt-br', {month: 'long'});

    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundos do dia ${dia} de ${mes} de ${ano} .`


    var img = window.document.getElementById('foto')
    

    if (hora >= 0 && hora < 12) {

        img.src = "./imagens/fotomanha.jpg"
        document.body.style.background = '#E1CB9A'

    } else if (hora >= 12 && hora < 18) {

        img.src = "./imagens/fototarde.jpg"
        document.body.style.background = '#6F5C8C'

    } else {

        img.src = "imagens/fotonoite.jpg"
        document.body.style.background = '#505168'
    }

}

