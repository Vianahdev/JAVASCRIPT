let l_element = document.querySelector('div#square');

/* EVENTO DOUBLE CLICK DO MOUSE*/
l_element.addEventListener('dblclick', () => {
  l_element.style.backgroundColor = 'yellow';
  l_element.style.borderRadius = '50%';

  newElement();
});

function newElement(){
  l_element.innerHTML = `<div id="parag"> DOUBLE CLICK </div>`

  let l_parag = document.querySelector('div#parag');
  l_parag.style.fontWeight = 'bold';
}
