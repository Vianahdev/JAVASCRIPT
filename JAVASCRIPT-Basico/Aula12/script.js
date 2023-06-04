alert("VALIDAÇÃO DE IDADE");

var v_idade;

v_idade = parseInt(prompt("Qual sua Idade?"));

if(v_idade >= 35){
    alert("PODE");
    alert("QUAL SEU PEDIDO?");
}else if(v_idade >= 18){
    alert("PODE");
    alert("MOSTRE A IDENTIDADE!");
}else{
    alert("NÃO PODE");
    alert("VOLTE FUTURAMENTE!");
}