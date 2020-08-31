function contar() {
    var ini = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var pas = document.querySelector('input#txtpas')

    var msg = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0){
        msg.innerHTML = 'Impossivel de Calcular!'
        window.alert('preencha todos os campos')
    }else if(pas.value.length == 0){
        window.alert('O campo passo e necessario, estamos preenchendo ele!')
        pas = document.querySelector('input#txtpas').value = 1
    }else{
            msg.innerHTML = ''
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(pas.value)

            if(i < f ){        
            for(var conta = i; conta<=f; conta+=p){   
                msg.innerHTML += `${conta} <b>👉</b>`
            }
            }else{
                for(var conta = i; conta>=f; conta-=p){   
                    msg.innerHTML += `${conta} <b>👉</b>`
                }
            }
            msg.innerHTML += `<b>🏁</b>` 
    }
}




