//Ordenação de elementos alfanumericos
let l_listFrutas = ["Uva", "Maçã", "Banana", "Morango"];

console.log(l_listFrutas.sort());

//Ordenação de elementos númericos

let l_listNumber = [30,4,3,65,32,0,1];

function order(a, b) {
  return a - b
}

console.log(l_listNumber.sort(order))