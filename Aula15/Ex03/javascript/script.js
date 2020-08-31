function calcula() {
    var data = new Date()
    var anoatual = data.getFullYear()

    var txtano = document.querySelector('input#txtent')
    var txtsal = document.querySelector('input#txtsal')
    var msg = document.querySelector('div#msg')

    if (txtano.value.length == 0 || txtsal.value.length == 0) {
        window.alert('[ERRO] Preencha os campos para realizar o calculo!')
    }else{
        var ano = Number(txtano.value)
        var sal = Number(txtsal.value)

        var percent = 0.015

        if (ano < 2012) {
            var salfim = sal * percent + sal
            msg.innerHTML = `Seu salario final e de : ${salfim.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
        }else{
             for (var calc = ano; calc <= anoatual; calc++) {
                if(calc == anoatual ){
                    var salfim = sal * percent + sal
                }else{
                    percent=percent+percent
                    var salfim = sal * percent + sal
                }    
            }
            msg.innerHTML = `Seu salario final e de : ${salfim.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`

        }
    
    }  
}

    



   
