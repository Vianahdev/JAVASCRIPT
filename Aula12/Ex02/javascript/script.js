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

        var genero
        var img = document.getElementById('imagem')

        if(fsex[0].checked){
           genero = 'homem' 
           if (idade >= 0 && idade <= 10){
            img.src = 'images/homem-crianca.jpg'
           }else if(idade <= 21){
            img.src = 'images/homem-jovem.jpg'
           }else if(idade <=55){
            img.src = 'images/homem-adulto.jpg'
           }else{
            img.src = 'images/homem-idoso.jpg'
           }

        }else{
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                img.src = 'images/mulher-crianca.jpg'
            }else if(idade <= 21){
                img.src = 'images/mulher-jovem.jpg'
            }else if(idade <=55){
                img.src = 'images/mulher-adulta.jpg'
            }else{
                img.src = 'images/mulher-idosa.jpg'
            }
        }

        msg.innerHTML = `Detectamos ${genero} de ${idade} anos.`

    }
}