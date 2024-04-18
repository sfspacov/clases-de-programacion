/*
    En la vida real, creamos codigos, lo metemos en una funcion para poder reutilizarlo
    diversas veces, de acuerdo con nuestras necesidades

    Una funcion puede hacer cualquer cosa: 
        - Hacer un pago, enviar mensaje, retornar valor,...
*/

function enviarEmail(nombre, email, cedula) {
    /*
        envio un correo para email

        Hola querida {nombre}, portadora de la cedula {cedula}.        
    */

}

enviarEmail("yesica", "yk@gmail.com", 156218998);

enviarEmail("Rodrigo", "rodrigo@yahoo.com.br", 2158415);



function hacerElPago(creditCardNumber, value, usuario) {
    //Integracion con el sistema del banco {creditCardNumber}
    if (creditCardNumber === true) {
        //hago la compra
    }
    else {
        //enviar un mensaje el usuario
    }
}

hacerElPago(125648451, 50000, "yesika");
hacerElPago(451874984, 32000, "rodrigo");


function validarVideo(video) //.mp3
{
    //codigo que va a validar frame a frame
}


function makeCall(host, inviteList, useWebCam, duracionMax)
{
    //codigo para hacer la llamada
}

makeCall("Stephan", ["Yk", "Rodri"], true, 120);
makeCall("Jose Luis", ["Maria de las Dores"], true, 60);
makeCall("Sheng", ["Ping", "Pong", "Lee", "Shung"], false, 30);


function movimientosDeLosPersonajesBuenos(arriba, abajo, derecha, izquierda, x, y, a, b)
{
    if (b) {
        //saltar
    } else if(a) {
        //dar una patada
    } else if(x)
    {
        //come un hunguito
    } else if (x, y, arriba)
    {
        //HADUUUUUKEEN
    }
    //..
}


function recibirTexto(texto)
{
    if (texto === preguntaElUltimo || texto === preguntaElMasReciente)
    {
        //base de datos
        return `Lo siento, no puedo`;

    }
    else {
        
    }
}
