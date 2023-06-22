var v_painel = document.querySelector('canvas#painel');
var v_pincel = v_painel.getContext('2d');

var v_raio = 10;

v_pincel.fillStyle = 'gray';
v_pincel.fillRect(0,0,600,400);

function circle(x, y, raio){

    v_pincel.fillStyle = 'black';
    v_pincel.beginPath();
    v_pincel.arc(x, y, raio, 0, 2 * Math.PI);
    v_pincel.fill();
}

function rectangle(x, y, width, height){

    v_pincel.fillStyle = 'black';
    v_pincel.fillRect(x,y,width,height);
}

function limpaTela(){

    v_pincel.clearRect(0,0,600,400);
}

var v_xMovimento = 10;

function movimenta(){

    limpaTela();
    circle(v_xMovimento, 200, v_raio + 5);
    v_xMovimento++;
}

setInterval(movimenta, 10);