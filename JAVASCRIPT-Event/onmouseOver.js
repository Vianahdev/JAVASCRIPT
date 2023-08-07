let l_Element = document.querySelector('div#square');

//Ponteiro é movido para o elemento que esteja escutando.
l_Element.addEventListener('mouseover', () => {
  l_Element.style.backgroundColor = 'pink';
  l_Element.style.borderRadius = '50%';

  parag();
})

function parag(){
  l_Element.innerHTML = `<div id="parag">MOUSE EM CIMA</div>`;
  let l_newElement = document.querySelector('div#parag');

  l_newElement.style.fontSize = '17px';
  l_newElement.style.fontWeight = 'bold';
}
