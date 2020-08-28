function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')


var periodo = new Date()
var hora = periodo.getHours()
var min = periodo.getMinutes()

msg.innerHTML = `Agora São exatamente ${hora}H ${min}Min`

if(hora <=12){
    img.src = 'imagem/dia.jpg'
    document.body.style.background = '#e2cd9f'
    
}else if(hora <= 18){
    img.src = 'imagem/tarde.jpg'
    document.body.style.background = '#b9846f'
}else{
    img.src = 'imagem/noite.jpg'
    document.body.style.background = '#515154'
}
}
