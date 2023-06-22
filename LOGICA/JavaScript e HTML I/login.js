var l_loginReg = "Meulogin123";
var l_passReg = "Minhasenha1";

for(var l_tentativa = 1; l_tentativa <= 3; l_tentativa++){
    let l_login = prompt("Informa o seu Login");
    let l_password = prompt("Informe sua Senha");

    if(l_login == l_loginReg && l_password == l_passReg){
        alert("LOGIN EFETUADO...");
        l_tentativa = 3;
    }else{
        if(l_tentativa == 3){
            alert("NUMERO DE TENTATIVAS EXCEDIDO");
        }else{
            alert("LOGIN OU SENHA INCORRETOS, TENTE NOVAMENTE");
        }
    }
}
