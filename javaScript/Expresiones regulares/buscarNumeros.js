let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//con \d buscamos los numero de 0 a 9

let movieNamee = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultt = movieName.match(noNumRegex).length;

//con la \D buscamos todo menos los numeros de 0 a 9