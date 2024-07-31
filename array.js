//Crea una lista vacía llamada "listaGenerica".
let listaGerencia = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let listaDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log(listaDeProgramacion);

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
listaDeProgramacion.push('Java','Ruby','GoLang');
console.log(listaDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarEnConsola(lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}
mostrarEnConsola(listaDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarOrdenInverso(lista){
    for(let i = lista.length - 1; i >= 0; i++){
        console.log(lista[i]);
    }
}
mostrarOrdenInverso(listaDeProgramacion);

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [2,4,5,6,7,3,1,4,32,5,7,8,1,0,132,6,623,4,856,31];

function promedioListaNumeros(lista) {
    let suma = 0;
    for(let i =0; i<lista.length; i++){
        suma += lista[i];
    }
    console.log(suma / lista.length);
}
promedioListaNumeros(listaNumeros);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumeroMayor(lista) {
    let numeroMaximo = lista[0];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] > numeroMaximo) {
            numeroMaximo = lista[i];
        }
    }  
    console.log("Número mayor:", numeroMaximo);
}

function mostrarNumeroMenor(lista){
    let numeroMenor = lista[0];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] < numeroMenor) {
            numeroMenor = lista[i];
        }
    } 
    console.log("Número menor:", numeroMenor);
}
mostrarNumeroMayor(listaNumeros);
mostrarNumeroMenor(listaNumeros);

//Crea una función que devuelva la suma de todos los elementos en una lista.
function SumaListaNumeros(listaNumeros) {
    let suma = 0;
    for(let i =0; i<listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    console.log(suma);
}
sumarListas(listaNumeros);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(elementoBuscado, listaNumeros) {
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] === elementoBuscado) {
            return i; // Devuelve la posición (índice) si se encuentra el elemento
        }
    }
    return -1; // Si no se encuentra, devuelve -1
}

// Ejemplo de uso:
const miLista = [10, 20, 30, 40, 50];
const elemento = 30;
const posicion = encontrarPosicion(elemento, miLista);
console.log(`El elemento ${elemento} se encuentra en la posición ${posicion}`);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(listaA, listaB) {
    const listaSuma = [];
    for (let i = 0; i < listaA.length; i++) {
        listaSuma.push(listaA[i] + listaB[i]);
    }
    return listaSuma;
}

// Ejemplo de uso:
const listaA = [1, 2, 3];
const listaB = [10, 20, 30];
const resultadoSuma = sumarListas(listaA, listaB);
console.log("La lista resultante de la suma es:", resultadoSuma);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function calcularCuadrados(listaNumeros) {
    const listaCuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        const cuadrado = listaNumeros[i] ** 2;
        listaCuadrados.push(cuadrado);
    }
    return listaCuadrados;
}

// Ejemplo de uso:
const numerosOriginales = [2, 4, 6];
const cuadrados = calcularCuadrados(numerosOriginales);
console.log("Los cuadrados son:", cuadrados);
