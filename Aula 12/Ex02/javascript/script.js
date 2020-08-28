function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtnasc = Number(window.document.getElementById('txtnasc').value)
    var result
    var msg = window.document.getElementById('msg')

    result = ano - txtnasc

    msg.innerHTML = `${result}`

}