/*var v_alunos = ["Matheus", "Gabriel", "Paulo", "Victor", "Arthur", "Edileus", "Geovanne"]

/*for(i = 0; i < v_alunos.length; i++){
    console.log(v_alunos[i]);
}*/

/* IN - pega o index
for(var i in v_alunos){
    console.log(v_alunos[i]);
}
*/


/* OF - pega o elemento */
/*
for(var aluno of v_alunos){
    console.log(aluno);
}
*/

/* Faça um algoritmo que leia 20 números digitados pelo usuário e, ao final, escreva quantos estão entre 0 e 100, quantos estão entre 101 e 200 e quantos são maiores de 200. */

var v_number
var v_cont = 0
var v_cont2 = 0
var v_cont3 = 0

for(i=0; i < 5; i++){
    v_number = parseInt(prompt("Digite um numero"));

    if(v_number > 0 && v_number < 100){
        v_cont++
    }else if (v_number > 101 && v_number < 200){
        v_cont2++
    }else{
        v_cont3++
    }
}


console.log("Numero de 0 a 100 = " + v_cont);
console.log("Numero de 0 a 100 = " + v_cont2);
console.log("Numero de 0 a 100 = " + v_cont3);


/*1. Faça um programa que leia três valores inteiros distintos e escreva o menor deles. */
var v_range = [];
var v_count = 0;

for(var i = 0; i < 3; i++ ){
    v_range.push(parseInt(prompt("DIGITE UM NUMERO:")));
    console.log("PASSOU NO PRIMEIRO LAÇO" + i);
}

for(var i = 0; i < v_range.length; i++){
    var v_number = v_range[i];
    
    if(v_number > v_count){
        v_count = v_number;
    }
}

console.log(v_count);