let valores = []

function adiciona(){
    let num = document.querySelector('input#txtnum')
    let area = document.querySelector('select#txtarea')

    let msg = document.querySelector('div#msg')

    if(num.value.length == 0){
        window.alert('[ERRO] Prencha o campo de numero')
    }else{

        if(Number(num.value) <= 0 || Number(num.value) > 100){
            window.alert('[ERRO] Valor Invalido')
        }else{

            if(valores.indexOf(Number(num.value)) != -1){
                window.alert('Valor já adicionado na Lista')
            }else{
                valores.push(Number(num.value))
        
                var item = document.createElement('option')
                item.text = `Valor ${Number(num.value)} adicionado.`
                area.appendChild(item)
                msg.innerHTML = ''
            }
        }
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let msg = document.querySelector('div#msg')

    if (valores.length == 0) {
        window.alert('Valor não adicionou nenhum valor na Lista')
    }else{
        let res = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } 
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma / res
        
        msg.innerHTML = ''
        msg.innerHTML += `<p>Ao todo, temos ${res} números cadastrados</p>`
        msg.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        msg.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        msg.innerHTML += `<p>A Soma dos valores e ${soma}</p>`
        msg.innerHTML += `<p>A Media dos valores informados é ${media}</p>`
    

    }
}
