
var v_nota1, v_nota2, v_nota3;

v_nota1 = parseFloat(prompt("Digite sua Nota 1"));
console.log(v_nota1);
v_nota2 = parseFloat(prompt("Digite sua Nota 2"));
console.log(v_nota2);
v_nota3 = parseFloat(prompt("Digite sua Nota 3"));
console.log(v_nota3);

var v_media = (v_nota1 + v_nota2 + v_nota3)/3;

var v_conceito = "";

    if(v_media >= 8){
            v_conceito = "Muito Bom"  
    }else if(v_media >= 6.5){
            v_conceito = "Bom"
    }else{
            v_conceito = "Insuficiente" 
    }

    switch(v_conceito){

        case "Muito Bom":
            alert("Sua média é " + v_media + " ,está perfeita");
        break;

        case "Bom":
            alert("Sua média é " + v_media + " ,está quase perfeita");
        break;

        case "Insuficiente":
            alert("Sua média é " + v_media + " ,estude mais um pouco");
        break;

        default:   
            alert("Ocorreu um erro na verificação das variaveis");
        break;  
    }



