var l_numkick = document.querySelector("input");
var l_button = document.querySelector("button");

var l_n = Math.round(Math.random() * 10);

l_button.onclick = adivinha;

function adivinha(){
let l_numInc = l_numkick.value;

    if(l_numInc == l_n){
        return alert("você ACERTOU!!!!!");
    }else{
        return alert("você ERROU!!!!!");
    }
}
