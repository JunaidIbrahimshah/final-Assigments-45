//storing a personname in a variable

let personName:String = "Junaid"

//Lower Case

console.log ("Lowercase:", personName.toLowerCase())

//Uppercase


console.log("Uppercase:",personName.toUpperCase());

//tittlecase

let firstletter = personName.charAt(0).toUpperCase();
let restletter = personName.slice(1).toLowerCase();
let tittlecase = firstletter+restletter;

console.log(tittlecase)
