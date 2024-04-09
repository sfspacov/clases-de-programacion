/*

if (condicion. si es verdadera)
{
    ejecuta para la verdad
}
else //si es falsa
{
    ejecuta codigo para falsidad
}
             AND
if (condicion1 && condicion2)
{
    las dos condiciones necesitan ser verdad
}

               OR
if (condicion1 || condicion2)
{
    basta una condicion ser verdad
}

Si el alumno tiene entre 
    9 y 10   = A
    8 y 8.9  = B
    7 y 7.9  = C
    6 y 6.9  = D
    5 y 5.9  = E
    0 y 4.9  = F
*/

let nota = 7;

if (nota >= 9) //falsa
{
    console.log("A");
}
else if (nota >= 8 && nota < 9)
{
    console.log("B");
}
else if (nota >= 7 && nota < 8)
{
    console.log("C");
}
else if (nota >= 6 && nota < 7)
{
    console.log("D");
}
else if (nota >= 5 && nota < 6)
{
    console.log("E");
}
else
{
    console.log("F");
}