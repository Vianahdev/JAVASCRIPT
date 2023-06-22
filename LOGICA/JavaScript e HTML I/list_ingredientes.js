var v_list = [];

var v_ingrediente = document.querySelector('input');
var v_incluir = document.querySelector('button');

v_incluir.onclick = inclur;

v_ingrediente.focus();

function inclur(){

    var v_valida = false;

    if (v_list.length == 0){
        v_list.push(v_ingrediente.value);
        console.log("PASSOU AQUI")
        }else{
            for(var i = 0; i < v_list.length; i++){
                if(v_list[i] == v_ingrediente.value){
                    v_valida = true;
                    alert("INGREDIENTE JÁ INSERIDO");
                    v_ingrediente.value = "";
                    v_ingrediente.focus();
                    break;
                    }
            }

            if(v_valida == false){
                v_list.push(v_ingrediente.value);
                v_valida = false
            }
        }
}
