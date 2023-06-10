// OBJETOS PROPRIEDADES

var aluno = {
        nome:"João",
        n1:7.4,
        n2:8
}

console.log(aluno["n1"]);

console.log("========================================");
// OBJETOS METODOS

function calcmedia(){
    return (this.notas[0] + this.notas[1])/2;
}

var aluno = {
        nome: "Matheus",
        notas: [7.8, 6.5],

        media: calcmedia
}

var aluno1 = {
        nome: "Gabriel",
        notas: [4.6, 5.5],

        media: calcmedia
}


console.log(aluno.nome + " sua média e: " + aluno.media());
console.log(aluno1.nome + " sua média e: " + aluno1.media());

console.log("========================================");

// OBJETOS CONTRUTORES


/*var calculamedia = function(){
    return (this.nota1 + this.nota2)/2;
}


var turma = [
            {
                nome: "Igor",
                nota1: 9,
                nota2: 7,

                media:calculamedia
            },

            {
                nome: "Lopes",
                nota1: 9,
                nota2: 7,

                media:calculamedia
            }
]

var pessoa = turma[0];
console.log(pessoa.nome + " sua média e: " + pessoa.media());*/



