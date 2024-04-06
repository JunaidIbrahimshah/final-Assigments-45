//storing a personname in a variable
var personName = "Junaid";
//Lower Case
console.log("Lowercase:", personName.toLowerCase());
//Uppercase
console.log("Uppercase:", personName.toUpperCase());
//tittlecase
var firstletter = personName.charAt(0).toUpperCase();
var restletter = personName.slice(1).toLowerCase();
var tittlecase = firstletter + restletter;
console.log(tittlecase);
