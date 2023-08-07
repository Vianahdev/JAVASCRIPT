let l_element = document.querySelector('div#square');

/* EVENTO CLICK DO MOUSE*/
  l_element.addEventListener('click', ()=>{
    l_element.style.backgroundColor = 'red';
    l_element.style.borderRadius = '50%';

    newElement();
  });

function newElement() {
  l_element.innerHTML = `<div id="parag">CLICK</div>`;

  let l_parag = document.querySelector('div#parag');

  l_parag.style.fontSize = '24px';
  l_parag.style.fontWeight = 'bold';
}  

