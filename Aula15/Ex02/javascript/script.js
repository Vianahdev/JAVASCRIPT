function tabuada() {

    var num = document.querySelector('input#txtnum')
    var msg = document.querySelector('select#txtarea')

    if (num.value.length == 0) {
        window.alert('Campo de Numero não preenchido!')
    }else{
        var t = Number(num.value)
        var c = 0
        
        msg.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            msg.appendChild(item)
            c++
        } 
        
    }

}


