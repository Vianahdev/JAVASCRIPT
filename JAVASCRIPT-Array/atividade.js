let l_objects = []

let l_btnAdd = document.querySelector('button#btnAdd');

l_btnAdd.addEventListener('click', ()=>{
  let l_txtInput = document.querySelector('input#txtInput').value;

  if(l_txtInput == ''){
    alert('Informe um valor válido');
  }else if(l_objects.indexOf(l_txtInput) !== -1){
    alert('Objeto já foi adicionado');
  }else{
    l_objects.push(l_txtInput);
    console.log(l_objects);
  }
})

let l_btnOrd = document.querySelector('button#btnOrd');

l_btnOrd.addEventListener('click', ()=>{
  l_objects.sort();
  console.log(l_objects);
})