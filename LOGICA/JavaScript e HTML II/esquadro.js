let l_canva = document.querySelector('canvas#painel');
let l_pincel = l_canva.getContext('2d');

l_pincel.fillStyle = 'black';
l_pincel.beginPath();
l_pincel.moveTo(50, 50);
l_pincel.lineTo(50, 400);
l_pincel.lineTo(400, 400);
l_pincel.fill();

l_pincel.fillStyle = 'white';
l_pincel.beginPath();
l_pincel.moveTo(100, 175);
l_pincel.lineTo(100, 350);
l_pincel.lineTo(275, 350);
l_pincel.fill();