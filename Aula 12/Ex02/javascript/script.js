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
            img.src = 'imagem/homem-crianca.jpg'
           }else if(idade <= 21){
            img.src = 'imagem/homem-jovem.jpg'
           }else if(idade <=55){
            img.src = 'imagem/homem-adulto.jpg'
           }else{
            img.src = 'imagem/homem-idoso.jpg'
           }

        }else{
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                img.src = 'imagem/mulher-crianca.jpg'
            }else if(idade <= 21){
                img.src = 'imagem/mulher-jovem.jpg'
            }else if(idade <=55){
                img.src = 'imagem/mulher-adulta.jpg'
            }else{
                img.src = 'imagem/mulher-idosa.jpg'
            }
        }

        msg.innerHTML = `Detectamos ${genero} de ${idade} anos.`

    }
}