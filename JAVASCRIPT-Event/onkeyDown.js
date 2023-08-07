//O event 'keydown' e execução quando e precionada uma tecla

let text = document.querySelector("input#text")

text.addEventListener("keydown", () => {
  let l_press = event.keyCode
  let l_tecla = String.fromCharCode(l_press)

  //alert("A TECLA PRESIONADA FOI " + l_tecla)

  console.log(l_tecla);
})
