let l_listFuncionarios = ['Jorge', 'Matheus' , 'Roberto', 'Mauricio', 'Gabriel', 'Maria', 'Ana'];

console.log(l_listFuncionarios)

l_listFuncionarios.forEach(function(valor, indice, array){
  //Lógica
  console.log('indice ' + indice + ' | valor ' + valor);
  
  if(valor == 'Jorge'){
    array[indice] = 'José'
  }
})


//Tecnica de Wrapper
let l_verifica = function (valor, indice){
  console.log("indice " + indice + " | valor " + valor);
}

l_listFuncionarios.forEach(l_verifica);


