/* Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en sus sitios favoritos.

Debe verificar todos los nombres de usuario en una base de datos. Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario solo pueden usar caracteres alfanuméricos.

Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres. */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);
console.log(result)