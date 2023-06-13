//NAVEGANDO ENTRE OS ELEMENTO///

let l_p1 = window.document.getElementsByTagName('p')[0]
l_p1.style.textAlign='center'

let l_p2 = window.document.getElementsByTagName('p')[1]


// MODIFICANDO ELEMENTOS - EVENTOS //

var v_box = window.document.getElementById('area')
v_box.addEventListener('click', clicar)
v_box.addEventListener('mousedown', apertando)
v_box.addEventListener('mouseup', soltando)

function clicar(){
    v_box.innerText='Clicou!'
}

function apertando(){
    v_box.style.backgroundColor='rgb(199, 68, 68)'
}

function soltando(){
    v_box.style.backgroundColor='rgb(151, 68, 199)'
}



// COLETANDO DADOS DO USUARIO - INPUT//


function somar(){
    
    let l_txtn1 = document.getElementById('txtn1')
    let l_txtn2 = document.getElementById('txtn2')
 
    let v_result = document.getElementById('result')

    let l_n1 = Number(l_txtn1.value);
    let l_n2 = Number(l_txtn2.value)
    let soma = l_n1 + l_n2

    v_result.innerHTML = `${soma}`
}



