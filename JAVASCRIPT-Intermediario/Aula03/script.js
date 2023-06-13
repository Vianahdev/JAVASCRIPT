// ARMAZENAENDO DADOS EM LOCALSTORAGE
localStorage.setItem("aluno", "Matheus");
let l_aluno = localStorage.getItem("aluno");
console.log(l_aluno)


// ARMAZENAENDO DADOS POR CAMPO  E FUNÇÃO
function dados(element){
    localStorage.setItem("valor", JSON.stringify(element.value));
}

let l_text = localStorage.getItem("valor");
    
let l_result = document.getElementById('log');
l_result.innerText=JSON.parse(l_text);
console.log(JSON.parse(l_text))



// ARAMZENADNO DADOS SRTING E CONVERTENDO EM DADOS NUMBER
 let l_alunos = {
        nome: "Gabriel",
        n1: 5.6
 }

 localStorage.setItem("aluno", JSON.stringify(l_alunos));

 let l_resultado = localStorage.getItem("aluno");
 console.log(JSON.parse(l_resultado));


// LIMPANDO DADOS ARMAZENADOS.
localStorage.clear();