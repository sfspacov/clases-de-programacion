/*
TODAS LAS LISTAS SIEMPRE EMPIEZAM CON EL INDICE = ZERO

Escuelita		PROGRAMACION [ "Ana", "Antonio", "Carlo", "Diana" ] -> length = 4
1 - Ana			0 - "Ana"
2 - Antonio		1 - "Antonio"
3 - Carlo		2 - "Carlo"
4 - Diana		3 - "Diana"
*/

let corolla = {
    ano: 2020,
    modelo: "Corolla",
    marca: "Toyota",
    pais: "Japan",
    potencia: "200hp",
    cambio: "automatico"
};
let escorte = {
    ano: 1998,
    modelo: "Escort",
    marca: "Ford",
    pais: "EEUU",
    potencia: "98hp",
    cambio: "manual"
}
let marenello = {
    ano: 2024,
    modelo: "Maranelo",
    marca: "Ferrari",
    pais: "Italia",
    potencia: "500hp",
    cambio: "automatico"
}

let listaDeCarros = [corolla, escorte, marenello]


//Condicion: quiero que esse loop si ejecute hasta el ultimo elemento de mi lista
for (let i = 0; i < listaDeCarros.length; i = i + 1) {
    console.log("Modelo: " + listaDeCarros[i].modelo +
        ", año " + listaDeCarros[i].ano +
        ", marca: " + listaDeCarros[i].marca +
        ", pais: " + listaDeCarros[i].pais +
        ", potencia: " + listaDeCarros[i].potencia +
        ", cambio: " + listaDeCarros[i].cambio)
}