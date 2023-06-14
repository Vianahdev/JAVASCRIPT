// fucntion.call(this, arg1, arg2)
// call do ingles chamar , ira retornar o this do contexto que eu enviar.
'use strict'

this.name = "Matheus";

function sayMyName(age){
    this.age = age;
    console.log(this.name, this.age);
}

const dev = {
    name:"Gabriel"
};

sayMyName.call(this, 18);
sayMyName.call(dev, 26);

console.log(this.age);
console.log(dev.age);