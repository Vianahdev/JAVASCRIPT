
//Nome do aluno -> nota 1 -> nota 2 -> media -> aprovado ou não aprovado

var v_nomes = ['Matheus', 'Gabriel', 'Wellington'];
var v_n1 = [10, 5, 9.5];
var v_n2 = [5, 4, 4.5];

function media(n1, n2){
    return (n1+n2)/2;
}

function passou(m){
    if(m < 6){
        return "REPROVADO";
    }else{
        return "APROVADO"
    }
}

for(var i in v_nomes){
    
    var nota1 = v_n1[i];
    var nota2 = v_n2[i];

    var m = media(nota1, nota2);

    console.log(v_nomes[i] + ", 1º Nota: " + nota1 + ", 2º Nota:" + nota2 + ", Média: " + m + ", " + passou(m));
}
