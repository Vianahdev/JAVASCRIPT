/*FUNÇÃO NORMAL*/ 
function dobro(x){
    document.write(2 * x);
    document.write('<br>');
}

/*FUNÇÃO ANONIMA*/ 
let l_dobro = function (x){
    document.write(2 * x);
    document.write('<br>');
}

/*ARROW FUNCTION*/ 
var v_dobro = (x) =>{
    return 2 * x;
}

dobro(4);
l_dobro(2);
document.write(v_dobro(3));

