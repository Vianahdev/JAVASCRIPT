function calcular(){
    var txtnum = document.querySelector('input#txtnum')
    var msg = document.querySelector('div#msg')
    
    if(txtnum.value.length == 0){
        msg.innerHTML = ('Imposivel Calcular')
        window.alert('[ERRO] Preencha o Campo!')
    }else{
        var num = Number(txtnum.value)
        var soma = 0

        if(num% 2 == 0){
        for (var i = 0; i<= num; i+=2) { 
            soma += i
        }
            var valor = 'par'
        }else{
        for (var i = 1; i<= num; i+=2) { 
            soma += i
        }
            var valor = 'impar'
        }
        msg.innerHTML = `A soma dos valores ${valor} e ${soma}`
    }
    
}
   
