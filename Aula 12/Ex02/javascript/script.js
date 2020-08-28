function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()

    var txtnasc = Number(document.querySelector('input#txtnasc').value)
    var msg = document.getElementById('msg')

    /*Validação de campo*/
    if(txtnasc == 0 || txtnasc > ano){
        window.alert('[ERRO] Vefique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - txtnasc

        var genero = ''
        var img = document.getElementById('imagem')

        if(fsex[0].checked){
           genero = 'homem' 
           if (idade >= 0 && idade <= 10){
            img.src = 'imagem/homem-crianca.jpg'
           }else if(idade <= 21){
            img.src = 'imagem/homem-adulto.jpg'
           }else if(idade <=50){
            img.src = 'imagem/homem-adulto.jpg'
           }else{
            img.src = 'imagem/homem-idoso.jpg'
           }

           msg.innerHTML = `Você e um ${genero} e sua idade e de ${idade} anos.`

        }else{
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                img.src = 'imagem/mulher-crianca.jpg'
            }else if(idade <= 21){
                img.src = 'imagem/mulher-adulta.jpg'
            }else if(idade <=50){
                img.src = 'imagem/mulher-adulta.jpg'
            }else{
                img.src = 'imagem/mulher-idosa.jpg'
            }

            msg.innerHTML = `Você e uma ${genero} e sua idade e de ${idade} anos.`
        }

    }
}