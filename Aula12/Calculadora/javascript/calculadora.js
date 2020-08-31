var valor
var result

function botao(num) {
        valor=document.getElementById('visor').value +=num 
}

function reseta() {
        valor = document.querySelector('input#visor').value = ''    
}

function calcula(){
        result = eval(valor)
        valor = document.querySelector('input#visor').value = result
}


