addEventListener('keyup', ()=>{
  //Seleciona o valor digitado
  let l_keypress = document.querySelector('input#txtValor').value;
  //Limpa o Campo Digitado
  document.querySelector('input#txtValor').value = '';

  l_keypress.trim();

  if (
    l_keypress == 0 ||
    l_keypress == 1 ||
    l_keypress == 2 ||
    l_keypress == 3 ||
    l_keypress == 4 ||
    l_keypress == 5 ||
    l_keypress == 6 ||
    l_keypress == 7 ||
    l_keypress == 8 ||
    l_keypress == 9
  ) {
    //Adicionado o caracter no campo referente a Numero
    document.querySelector('input#txtNumber').value += l_keypress;
  } else {
    //Adicionado o caracter no campo referente a Letra
    document.querySelector('input#txtLetras').value += l_keypress;
  }
});
