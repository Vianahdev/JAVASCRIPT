//O event 'keypress' e execução quando e precionada uma tecla
//OBS. O evento onkeypress está obsoleto. Não é disparado para todas as teclas (como ALT, CTRL, SHIFT, ESC) em todos os navegadores.

let text = document.querySelector("input#text")

text.addEventListener("keypress", () => {
  let l_press = event.keyCode
  let l_tecla = String.fromCharCode(l_press)

  alert("A TECLA PRESIONADA FOI " + l_tecla)
})
