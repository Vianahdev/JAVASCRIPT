// fucntion.bind(this)()
// ira retornar o this do contexto que eu enviar.
'use strict'

this.name = "Matheus";
this.age = 25;

function sayMyName(age, likes, clothes){
    this.age = age;
    this.likes = likes;
    this.clothes = clothes;
    console.log(this.name, this.age, this.likes, this.clothes);
}

const dev = {
    name:"Gabriel",
    age: 35,
    syMayAge: function(){
        console.log(this.name, this.age);
    }
};

const boundsayMyName = sayMyName.bind(this)
boundsayMyName(18, "Banana", "Shorts");

//const boundsayMyNameMethod = sayMyName.bind(dev)
//boundsayMyNameMethod(19, "Macarrão", "Calça");

const age = dev.syMayAge.bind(dev);

age();


