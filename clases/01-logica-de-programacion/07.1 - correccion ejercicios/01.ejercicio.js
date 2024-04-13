/* EJERCICIO DE IF/ELSE:
 - Escribe un programa que declare dos variables que almacene numero, 
 y luego determine e imprima cuál de los dos números es mayor, o si son iguales.
 */

let var1 = 133;
let var2 = 133;

if (var1 > var2) {
    console.log("variable 1 es mayor:" + var1);
}
else if (var1 < var2) // var2 > var1
{
    console.log("variable 2 es mayor:" + var2);
}
else
{
    console.log("son iguales")
}