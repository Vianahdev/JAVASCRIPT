let l_multtable = parseInt(prompt("DIGITE A TABUADA A SER EXIBIDA:"));

multiply(l_multtable);

function show(text){

    document.write(text);
}

function jumpLine(numline){

    for(var i = 0;  i < numline; i++){
        document.write("<br>");
    }
}

function multiply(num){

    let l_multiply

    let i = 0;

    while (i <= 10) {
        l_multiply = num * i;
        show(i + " X " + num + " = " + l_multiply);
        jumpLine(1);  
        i++;
    }

    //for(var i = 0; i <= 10; i++){
    //    l_multiply = num * i;
    //    show(i + " X " + num + " = " + l_multiply);
    //    jumpLine(1);
    //}
}

