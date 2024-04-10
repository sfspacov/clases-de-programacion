/*
    FUNCTION (METHOD):
    - Ella encapsula un codigo/algoritmo
    - Tengo que llamarla para que sea ejecutada
    - Puede recibir un paramtro
*/

function miPrimeraFuncion()
{
    let corolla = { ano: 2020, modelo: "Corolla", marca: "Toyota", pais: "Japan", potencia: "200hp", cambio: "automatico" };
    let escorte = { ano: 1998, modelo: "Escort", marca: "Ford", pais: "EEUU", potencia: "98hp", cambio: "manual" };
    let marenello = { ano: 2024, modelo: "Maranelo", marca: "Ferrari", pais: "Italia", potencia: "500hp", cambio: "automatico" };
    
    let listaDeCarros = [corolla, escorte, marenello] //array
    
    //Condicion: quiero que esse loop si ejecute hasta el ultimo elemento de mi lista
    for (let i = 0; i < listaDeCarros.length; i = i + 1) {
        console.log("Nombre del Carro: " + listaDeCarros[i].modelo +
            ", año " + listaDeCarros[i].ano +
            ", marca: " + listaDeCarros[i].marca +
            ", pais: " + listaDeCarros[i].pais +
            ", potencia: " + listaDeCarros[i].potencia +
            ", cambio: " + listaDeCarros[i].cambio)
    }
}

console.log(1);
miPrimeraFuncion();
console.log(2);
miPrimeraFuncion();
console.log(3);
miPrimeraFuncion();