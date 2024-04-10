function imprimir(texto)
{
    console.log(texto);
}

function imprimirNumeros(primerNumero, ultimoNumero, incremiento)
{
    for (let i = primerNumero; i <= ultimoNumero; i = i + incremiento)
    {
        imprimir(i);
    }
}

console.log('primeira');
imprimirNumeros(1, 5, 1);
console.log('segunda');
imprimirNumeros(-5, 8, 2);