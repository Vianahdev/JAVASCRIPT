function creatSquare(x, y, color){

    let l_painel = document.querySelector('canvas#painel');
    let l_pincel = l_painel.getContext('2d');

    l_pincel.fillStyle = color;
    l_pincel.fillRect(x,y,50,50);
    l_pincel.fillStroke = 'Black';
    l_pincel.strokeRect(x,y,50,50);
}

creatSquare(0,0,'Blue');
creatSquare(0,50,'Green');
creatSquare(0,100,'Yellow');
creatSquare(0,150,'Red');
