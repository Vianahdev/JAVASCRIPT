/*CALLBACK*/

/*EX 1*/

/*
function show(){
  return document.write('Ola, ');
}

function suadacao(s,name){
  s();
  document.write(name);
}

suadacao(show, "Matheus");
*/

/*EX 2*/
/*
let users = ['Matheus', 'Gabriel'];

function insertUsers(name, callback){

  setTimeout(() =>{
    users.push(name);
    callback();
  }, 1000);   
}

function listUsers(){
  return document.write(users);
}

insertUsers('Armando', listUsers);
listUsers();
*/

/* EX 3*/

function exibirArtigo(id, callbackSucesso, callbackErro) {
  if (true) {
    callbackSucesso("Funções de Callback em JS", "Funções são muito utilizadas")
  } else {
    callbackErro("Erro ao recuperar os dados")
  }
}

var callbackSucesso = (titulo, descricao) => {
  document.write("<h1>" + titulo + "</h1>")
  document.write("<hr/>")
  document.write("<h3>" + descricao + "</h3>")
}

var callbackErro = (erro) => {
  document.write("<h1><b>Erro:<b/> " + erro + "</h1>")
}

exibirArtigo(1, callbackSucesso, callbackErro)
