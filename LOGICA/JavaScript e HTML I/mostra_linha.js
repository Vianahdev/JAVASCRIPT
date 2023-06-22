let l_line = parseInt(prompt("INFORME O NÚMERO DE LINHAS:"));
let l_colunm = parseInt(prompt("INFORME O NÚEMRO DE COLUNAS:"));

LineColunms(l_line, l_colunm);
        
function LineColunms(numline, numcolumns){
    
    for(var line = 0; line < numline; line++){
        for(var column = 0; column < numcolumns; column++){
            document.write("*");
        }
        document.write("<br>");
    }
}    
