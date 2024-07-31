function holaMundo(){
    console.log("Hola Mundo");
    alert("¡Hola Mundo!");
}

holaMundo();

function nombre(nombre){
    console.log(`Hola ${nombre}!!`);
}
nombre("Juan");

function solicitarNumero(){
    var numero1 = prompt("¿Cuál es tu primer número?");
    var numero2 = prompt("¿Cuál es tu segundo número?");
    var numero3 = prompt("¿Cual es tu tercer número?");
}

function numeroDoble(numero){
    return numero * 2;
}
let resultadoDoble = numeroDoble(5);
console.log(resultadoDoble);

function calcularPromedio(a, b, c){
    return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

function encontrarMayor(a, b) {
    return a > b ? a : b;
}
  
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

function cuadrado(numero) {
    return numero * numero;
}
  
let resultado = cuadrado(2);
console.log(resultado);


// practica # 2
function IMC(altura, peso) {
    return peso / (altura * altura);
}

let imc = IMC('1.80','80');
console.log(imc);

function factorial(numeroFactorial) {
    if (numeroFactorial == 0) {
        return 1;
    } else {
        return numeroFactorial * factorial(numeroFactorial - 1);
    } 
}

console.log(`El factorial de ${numeroFactorial} es: ${factorial(numero)}`);

function TRM(dolares) {
    return dolares * 4109;
}

let cop = TRM(5);
console.log(cop);

function area(base, altura){
    return base*altura;
}

let areaCalculada = area('10','5');
console.log(areaCalculada);


function perimetro(radio){
    let pi = 3.1415161924;
    return 2*pi*radio;
}

let perimetroCalculado = perimetro(5);
console.log(perimetroCalculado);

function multiplicacion(numeroMultiplicar) {
    for(var i=1;i<10;i++){
        var resultado = numeroMultiplicar*i;
        console.log(numeroMultiplicar + " x " + i + " = " + resultado);
    }    
}
let resultadoMultiplicacion = multiplicacion(8);
console.log(resultadoMultiplicacion);