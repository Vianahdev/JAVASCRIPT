/*EXERCICIO 01*/

var v_idade = parseInt(prompt("Digite sua Idade:"));

var v_categoria="";

if(v_idade <=10 && v_idade >=5){
    v_categoria = "INFANTIL";
}else if(v_idade >=11 && v_idade <=15){
    v_categoria = "JUVENIL";
}else if(v_idade >=16 && v_idade <=20){
    v_categoria = "JUNIOR";
}else if(v_idade >=21 && v_idade <=25){
    v_categoria = "PROFISSIONAL";
}else if(v_idade >= 26){
    v_categoria = "TIOZÃO"
}else{
    v_categoria = "BEBE"
}

switch(v_categoria){
    case "INFANTIL":
        alert("Sua Categoria e INFANTIL");
    break;

    case "JUVENIL":
        alert("Sua Categoria e JUVENIL");
    break;

    case "JUNIOR":
        alert("Sua Categoria e JUNIOR");
    break;

    case "PROFISSIONAL":
        alert("Sua Categoria e PROFISSIONAL");
    break;

    case "TIOZÃO":
        alert("Sua Categoria e TIOZÃO");
    break;

    case "BEBE":
        alert("Precisar crescer mais um pouco BEBEZINHO");
    break;
    
    default:
        alert("Problema na leitura da variavel");
    break;
}


/*EXERCICIO 02*/

var v_codigo = parseInt(prompt("Digite o codigo:"));

var v_class="";

switch(v_codigo){

    case v_codigo = 1:
        alert("ALIMENTO NÃO-PERECÍVEL");
    break;

    case v_codigo =2:
    case v_codigo =3:
    case v_codigo =4:
        alert("ALIMENTO PERECÍVEL");
    break;

    case v_codigo =5:
    case v_codigo =6:
        alert("VESTUÁRIO");
    break;

    case v_codigo =7:
        alert("HIGIENE PESSOAL");
    break;

    case v_codigo =8:
    case v_codigo =9:
    case v_codigo =10:
    case v_codigo =11:
    case v_codigo =12:
    case v_codigo =13:
    case v_codigo =14:
    case v_codigo =15: 
        alert("LIMPEZA E UTENSÍLIOS DOMÉSTICOS");
    break;          

    default:
        alert("CODIGO INVALIDO, FAVOR DIGITAR NOVAMENTE!");
    break;
}


/* EXERCICIO 03*/

var v_codigo = parseInt(prompt("DIGITE O CODIGO:"));
var v_qtdn = parseInt(prompt("DIGITE A QUANTIDADE:"));

switch(v_codigo){
    case v_codigo = 100:
        var v_preco = v_qtdn * 1.70;
        alert("O PREÇO DO CACHORRO QUENTE FOI R$ " + v_preco);
    break;

    case v_codigo = 101:
        var v_preco = v_qtdn * 2.30;
        alert("O PREÇO DO BAURU SIMPLES FOI R$ " + v_preco);
    break;

    case v_codigo = 102:
        var v_preco = v_qtdn * 2.60;
        alert("O PREÇO DO BAURU COM OVO FOI R$ " + v_preco);
    break;

    case v_codigo = 103:
        var v_preco = v_qtdn * 2.40;
        alert("O PREÇO DO HAMBURGUER FOI R$ " + v_preco);
    break;

    case v_codigo = 104:
        var v_preco = v_qtdn * 2.50;
        alert("O PREÇO DO CHEESEBURGUER FOI R$ " + v_preco);
    break;

    case v_codigo = 105:
        var v_preco = v_qtdn * 1.00;
        alert("O PREÇO DO REFRIGERANTE FOI R$ " + v_preco);
    break;

    default:
        alert("PROBLEMA NA LEITURA DA VARIAVEL");
    break;
}

