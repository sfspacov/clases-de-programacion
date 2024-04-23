const express = require('express'); //quiero utilizar express
const app = express();
app.use(express.json());
/*
    HTTP - protocolo que es la fundacion de la internet
    - Hay 4 tipos de requisiciones HTTP
        - GET: Lectura 
            - Los navegadores solo consiguen hacer requisiciones de GET
        - POST: Creacion
        - PUT: Actualizacion
        - DELETE: Borrar
*/

//Array = Lista = Colección
let listaDeCarros = [
    {
        marca: "Toyota",
        ano: 2024,
        color: "blanco",
        proprietarios: ["Beto", "Maria", "Jose"],
        motor:
        {
            combustible: "Gas",
            potencia: "400 hp",
            pistones: 6
        },
        placa: 1
    },
    {
        marca: "Ferrari",
        ano: 2024,
        color: "Roja",
        proprietarios: ["John Smith"],
        motor:
        {
            combustible: "Gasolina",
            potencia: "800 hp",
            pistones: 4
        },
        placa: 2
    }
]

//Endpoint = URL
//HTTP GET
app.get('/search', (req, res) => {

    const marca = req.query.marca;

    if (marca === undefined || marca === '')
    {
        res.json(listaDeCarros);
    }

    let filtro = listaDeCarros.filter(carro => 
        carro.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()
    )                                            
    res.json(filtro);
});

//HTTP POST
app.post('/add', (req, res) => {

    let nuevoCarro = req.body;
    /*
        {
        marca: "X",
        ano: 2024,
        color: "Y",
        proprietarios: ["...", "..."],
        motor:
        {
            combustible: "Tipo de combustible",
            potencia: "xxx hp",
            pistones: x
        }
    }
    */

    //Valido los datos
    if (nuevoCarro === undefined)
    {
        //Envio un error
        return res.status(400).json({ error: 'Los datos del carro son obligatorios' });
    }

    listaDeCarros.push(nuevoCarro);

    // Enviar una respuesta indicando éxito
    res.status(201).json({ message: 'Carro creado exitosamente', carro: nuevoCarro });
});

//Poner el servidor/backend en el aire: Tornarlo accesible para el navegador
const puerta = 1111;
app.listen(puerta, () => {
    console.log('Server running on http://localhost:' + puerta);
});