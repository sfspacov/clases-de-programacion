/*
Mediana
2) Cree un if/else donde si el nombre de usuario y la contraseña ingresados 
coinciden con valores predefinidos (ejemplo: miUsuario y miClave), muestre 
    "Inicio de sesión exitoso"
de lo contrario, muestre 
    "Nombre de usuario o contraseña incorrectos".
*/
//const = abreviacion de constant
const predefinedUsername = "user123";
const predefinedPassword = "pass456";

const username = "user123";
const password = "pass456"

//           VERDAD                             VERDAD
if (username === predefinedUsername && password === predefinedPassword) 
{
    console.log("Inicio de sesión exitoso");
} 
else 
{
    console.log("Nombre de usuario o contraseña incorrectos");
}