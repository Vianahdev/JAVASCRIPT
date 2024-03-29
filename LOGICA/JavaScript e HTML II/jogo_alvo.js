var v_painel = document.querySelector('canvas#painel');
var v_pincel = v_painel.getContext('2d');

var v_raio = 10;

var v_xAleatorio;
var v_yAleatorio;

// Painel.
v_pincel.fillStyle = 'Lightgray';
v_pincel.fillRect(0,0,600,400);

//Função para desenhar circulo.
function drawCircle(x, y, raio, cor){

    v_pincel.fillStyle = cor;
    v_pincel.beginPath();
    v_pincel.arc(x, y, raio, 0, 2 * Math.PI);
    v_pincel.fill();
}

//Função para limpar tela.
function cleanScreen(){

    v_pincel.clearRect(0, 0, 600, 400);
}

//Função para desenhar alvo.
function drawTarget(x, y){

   drawCircle(x,y, v_raio+20, 'red');
   drawCircle(x,y, v_raio+10, 'white');
   drawCircle(x,y, v_raio, 'red');
}
            
//Função para gerar posição aleatoria para o alvo.
function rafflePosition(max){

    return Math.floor(Math.random() * max);
}

//Função para recarregar o alvo na tela.          
function refreshScreen(){
    cleanScreen();
    v_xAleatorio = rafflePosition(600);
    v_yAleatorio = rafflePosition(400);

    drawTarget(v_xAleatorio, v_yAleatorio);
}

setInterval(refreshScreen, 700);

//Função de acerto do alvo.
function hitTarget(event){

    var x = event.pageX - v_painel.offsetLeft;
    var y = event.pageY - v_painel.offsetTop;

    if((x > v_xAleatorio - v_raio) && (x < v_xAleatorio + v_raio) && (y > v_yAleatorio - v_raio) && (y < v_yAleatorio + v_raio)){
        alert('Acertou!!!!!');
    }
}

            

v_painel.onclick = hitTarget;
