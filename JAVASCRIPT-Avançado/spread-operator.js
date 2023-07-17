/*SPREAD OPERATOR OBJECT*/

let pessoa = {
  name: "Matheus",
  age: 24,
  height: 1.85,
  sex: 'Masc'
}

let contato = {
  telephone: '+5511998765432'
}

let cliente = {...pessoa, ...contato};
cliente.telephone = '+551123456789';

console.log(cliente);

/* SPREAD OPERATO ARRAY*/

let turmaA = [
  {
    name: 'Matheus',
    age: 24,
    nota1: 10,
    nota2: 4
  },

  {
    name: 'Gabriel',
    age: 17,
    nota1: 7,
    nota2: 10
  },

  {
    name: 'Ana',
    age: 13,
    nota1: 10,
    nota2: 9
  }
]


let turmaB = [
  {
    name: "Rodrigo",
    age: 32,
    nota1: 10,
    nota2: 4,
  },

  {
    name: "Maria",
    age: 23,
    nota1: 7,
    nota2: 10,
  },

  {
    name: "José",
    age: 14,
    nota1: 10,
    nota2: 9,
  },
]

let turmaPrincipal = [...turmaA, ...turmaB]
turmaPrincipal.push({ name: "Igor", age: 33, nota1: 10, nota2: 9});


console.log(turmaPrincipal)