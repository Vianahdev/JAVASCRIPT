//Painel Verde
let l_painel = document.querySelector('canvas#painel');
let l_pincel = l_painel.getContext('2d');

l_pincel.fillStyle = 'Green';
l_pincel.fillRect(0,0,600,400);

//Retangulo
l_pincel.fillStyle = 'Yellow';
l_pincel.beginPath();
l_pincel.moveTo(300, 50);
l_pincel.lineTo(50, 200);
l_pincel.lineTo(550, 200);
l_pincel.fill();

l_pincel.fillStyle = 'Yellow';
l_pincel.beginPath();
l_pincel.moveTo(300, 350);
l_pincel.lineTo(50, 200);
l_pincel.lineTo(550, 200);
l_pincel.fill();

//Circulo
l_pincel.fillStyle='darkblue';
l_pincel.beginPath();
l_pincel.arc(300, 200, 100, 0, 2*3.14);
l_pincel.fill();
