let l_element = document.querySelector('div#square');

/* EVENTO CLICK E SEGURA DO MOUSE*/
l_element.addEventListener('mouseup', ()=> {
  l_element.style.backgroundColor = 'blue';
  l_element.style.borderRadius = '50%';

  newElement();
});

function newElement(){
  l_element.innerHTML = `<div id="parag">CLICK SEGURA</div>`;

  let new_element = document.querySelector('div#parag');

  new_element.style.fontSize = '16px';
  new_element.style.fontWeight = 'bold';
}