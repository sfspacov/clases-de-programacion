const express = require('express'); //quiero utilizar express
const app = express();
/*HTTP GET, POST, PUT, DELETE
    www.linkedin.com
    - GET: Requisicion de lectura
    - POST: Escribir
    - PUT: Modificacion/Update
    - DELETE: Deletar
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
        }
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
        }
    }]

//Endpoint = URL
//HTTP GET
app.get('/api', (req, res) => {
    res.json(listaDeCarros)
});

app.listen(3000, () => { console.log('Server running on http://localhost:3000'); });