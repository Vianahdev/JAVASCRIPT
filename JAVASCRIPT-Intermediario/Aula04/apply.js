// fucntion.apply(this, [arg1, arg2])
// ira retornar o this do contexto que eu enviar.
'use strict'

this.name = "Matheus";
this.age = 25;

function sayMyName(){
    this.age = arguments[0];
    this.likes = arguments[1];
    this.clothes = arguments[2]
    console.log(this.name, this.age, this.likes, this.clothes);
}

const dev = {
    name:"Gabriel"
};

sayMyName.apply(this, [35, "Mel", "Casual"]);


