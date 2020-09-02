let num = [5,8,9,2,3]
num.push(4)
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos}, está com o valor ${num[pos]}`)
}    
*/

for (let pos in num){
    console.log(`A posição ${pos}, está com o valor ${num[pos]}`)
}


