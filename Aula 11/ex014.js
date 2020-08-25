var agora = new Date()
var diasem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()

/*
0 - Domingo
1 - Segunda-Feira
2 - Terça-Feira
3 - Quarta-Feira
4 - Quinta-Feira
5 - Sexta-Feira
6 - Sabado
*/ 

switch(diasem){
    case 0:
        console.log(`Domingo ${hora}h ${min}min`)
    break

    case 1:
        console.log(`Segunda-Feira ${hora}h ${min}min`)
    break

    case 2:
        console.log(`Terça-Feira ${hora}h ${min}min`)
    break

    case 3:
        console.log(`Quarta-Feira ${hora}h ${min}min`)
    break

    case 4:
        console.log(`Quinta-Feira ${hora}h ${min}min`)
    break

    case 5:
        console.log(`Sexta-Feira ${hora}h ${min}min`)
    break

    case 6:
        console.log(`Sabado ${hora}h ${min}min`)
    break    
}

