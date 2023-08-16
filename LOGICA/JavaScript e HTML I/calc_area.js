let width = document.querySelector('input#width');
let length = document.querySelector('input#length');

let button = document.querySelector('button#calc');

button.addEventListener('click', ()=>{
  let result = document.querySelector('h1#result');

  if (width.value == '' || length.value == ''){
    result.innerHTML = `FAVOR INSERIR UM VALOR`;

    width.style.borderColor = 'red';
    length.style.borderColor = 'red';
  }else{
    let calcArea = width.value * length.value;
    result.innerHTML = `O tamanho da area e: ${calcArea}`;
  }
});
