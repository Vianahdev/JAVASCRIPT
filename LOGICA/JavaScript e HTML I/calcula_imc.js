var v_imcMatheus = calcIMC(1.85,94);
var v_imcGabriel = calcIMC(1.85,120);

mostra("O IMC DO MATHEUS E: " + v_imcMatheus);
pulaLinha(1);
mostra("O IMC DO GABRIEL E: " + v_imcGabriel);        

function pulaLinha(numlinha){
    
    for(var i = 0; i < numlinha; i++){
        document.write("<br>");
    }
}

function mostra(texto){

    document.write(texto);
}

function calcIMC(altura,peso){

    let l_result = Math.round(peso / (altura * altura));
    return l_result;
}
