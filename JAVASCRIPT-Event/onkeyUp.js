//O event 'keyup' só e execução após soltar a tecla precionada.

let text = document.querySelector("input#text")

text.addEventListener("keyup", () => {
  let l_press = event.keyCode
  let l_tecla = String.fromCharCode(l_press)

  alert("A TECLA PRESIONADA FOI " + l_tecla)
})
