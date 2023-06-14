//////// This sem utilização do 'use strict' //////////

/*
// Global Scope
this.name = "Matheus";

console.log(this.name);

//Local Scope
function sayMayName(){
    console.log(this.name + " <- Name dentro da Function");
}

sayMayName();
*/

//////// This com a utilização do 'use strict' //////////
'use strict'

// Global Scope
this.name = "Matheus";

console.log(this.name);

//Local Scope
function sayMayName(){
    console.log(this.name + " <- Name dentro da Function");
}

sayMayName();

