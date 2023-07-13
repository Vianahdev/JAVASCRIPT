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
