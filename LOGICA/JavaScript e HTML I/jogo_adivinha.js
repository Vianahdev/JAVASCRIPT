let l_chute = parseInt(prompt("TENTE ADIVINHAR O NÚMERO DE 0 A 10:"));

let l_numChute = Math.round(Math.random() * 10);

show(kick(l_chute, l_numChute));
jumpLine(1);
show("O NÚMERO PENSADO FOI " + l_numChute);

function kick(numchosen, numkick){

    if(numchosen == numkick){
        return "PARABÉNS VOCÊ ACERTOU, CHUTOU BEM!!!!!!"
    }else{
        return "INFELIZMENTE VOCÊ ERROU TENTE NOVAMENTE..."
    }
}

function jumpLine(numline){

    for(var i = 0; i < numline; i++){
        document.write("<br>");
    }
}

function show(text){

    document.write(text);
}

