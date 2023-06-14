// this no contexto de dentro de um Metodo
// - O this encher somente o escopo Local dentro do Metodo, mesmo utilizando o modo estrito

this.name = "Matheus";

const aluno = {
    name:"Gabirel",
    sayMyName: function(){
        console.log(this.name + " <- Dentro do Metodo")
    }
}

aluno.sayMyName();