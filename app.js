let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    //Con esta funcion conseguimos modificar textos en el html
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //vamos a verificar el nuemro que ingresa el usuario contra el nuemro dado por la maquina
    //Con el parseint conseguimos que el dato ingresado sea un valor numerico
    let numero = parseInt(document.getElementById('valorUsuario').value);
    if(numero === numeroSecreto){
        //verificamos con el === si es el numero y si es del mismo tipo de dato
        asignarTextoElemento('p', `¡Ganaste! en ${intentos} ${(intentos === 1) ? 'ves' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //aca miramos si el numero es mayor o menos y se indica si es alto o bajo
        if(numero > numeroSecreto){
        asignarTextoElemento('p', `¡Demasiado alto! llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        }else if(numero < numeroSecreto){
            asignarTextoElemento('p', `¡Demasiado bajo! llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        }else{
            asignarTextoElemento('p', `¡No ingresaste un número!`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generadorNumeros() {
    //generamos un numero aleatorio entre 1 y 10
    var numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarCaja(){
    //limpiamos el input con el selectro directo al id utilizando el #
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    //condiciones iniciales para que el juego se inicie
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generadorNumeros();
    intentos = 1;
}

function reiniciarJuego() {
    /*limpiar la caja, 
    generar nuevo nuemro aleatorio, 
    desabilitar el boton de neuvo
    inicializar nuemro de intentos
    indicar mensaje de intervalo de numeros*/
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

