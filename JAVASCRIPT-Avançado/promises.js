let users = ['Matheus', 'Gabriel', 'Armando'];

function insertUsers(name){
    let promise = new Promise(function(resolve, reject){    
            setTimeout(() =>{
                users.push(name);
                let error = false;

                if(!error){
                    resolve();
                }else{
                    reject({msg: "Não foi possivel inserir usuario!!"});
                }
            }, 3000);  
        }
    );
    return promise;
}

function listUsers(){
  return document.write(users);
}

insertUsers('José').then(listUsers).catch((error)=>{
    document.write(error.msg)
});