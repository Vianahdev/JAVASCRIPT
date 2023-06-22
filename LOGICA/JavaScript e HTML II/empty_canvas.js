var v_tela = document.querySelector('canvas#painel');

//Criando um pincel para o canvas.
var v_pincel = v_tela.getContext('2d');

//Ajustadno a cor da tela (Canva).
v_pincel.fillStyle = 'Lightgrey'; 
v_pincel.fillRect(0,0,600,400);

//Criando dois retângulos.
v_pincel.fillStyle = 'green';
v_pincel.fillRect(0,0, 200, 400);
            
v_pincel.fillStyle = 'red';
v_pincel.fillRect(400,0, 200, 400);

//Criando um triangulo.
v_pincel.fillStyle = 'yellow';
v_pincel.beginPath();
v_pincel.moveTo(300, 200);
v_pincel.lineTo(200, 400);
v_pincel.lineTo(400, 400);
v_pincel.fill();

//Criando um circulo.
v_pincel.fillStyle = 'blue';
v_pincel.beginPath();
v_pincel.arc(300, 200, 50, 0, 2 * 3.14);
v_pincel.fill();            
