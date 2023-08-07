let l_Element = document.querySelector('div#square');

l_Element.addEventListener('mouseout', ()=>{
  l_Element.style.backgroundColor = 'purple';
  l_Element.style.borderRadius = '50%';

  parag();
});

function parag(){
  l_Element.innerHTML = `<div id="parag">MOUSE FORA</div>`;

  let l_newElement = document.querySelector('div#parag');
  l_newElement.style.fontSize = '18px';
  l_newElement.style.fontWeight = '700';
}