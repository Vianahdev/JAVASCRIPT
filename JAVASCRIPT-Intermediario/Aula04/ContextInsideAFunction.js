// this no contexto de dentro de uma Função
// - Pega o this Global, porém não pode estar no modo estrito.

'use strict'

this.name = "Matheus";

function sayMyName(){
    console.log(this.name + " <- Dentro da função")
}

sayMyName();