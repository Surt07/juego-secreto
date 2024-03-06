/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
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

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

*/
//Desafíos

//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
// 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguajesDeProgramacion);

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function showList(){
    return console.log(lenguajesDeProgramacion);
}
showList();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function showListBackwards(){
    for(let i = lenguajesDeProgramacion.length - 1; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }  
}
showListBackwards();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
function avg(listNumbers){
    let suma = 0;
    for(let i = 0; i < listNumbers.length; i++){
        suma += listNumbers[i];
    }
    return suma / listNumbers.length;   
}
let listaEjemplo = [5, 10, 8, 4, 1];
let promedio = avg(listaEjemplo);
console.log(`El promedio es ${promedio}`);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function masGrandeYmasChico(lista){
    let numMayor = lista [0];
    let numMenor = lista [0];
    for(let i=0; i < lista.length; i++){
        if(lista[i] > numMayor){
            numMayor = lista[i];
        }
        if(lista[i] < numMenor){
            numMenor = lista[i];
        }
    }
    console.log('El mayor es '+numMayor+'\nEl menor es '+numMenor);
}
let otraLista = [1,10,5,3,8];
masGrandeYmasChico(otraLista);

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeLista(lista){
    let suma = 0;
    for(let i =0; i < lista.length; i++){
        suma += lista[i];
    }
    return console.log('La suma total es de: '+suma);
}
let listaParaSumar = [1,2,3,4];
sumaDeLista(listaParaSumar);

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    for (let i=0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return console.log("El elemento está en el índice: "+i);
      }
    }
    return console.log(-1);
  }
let listaParaBusqueda = [2,4,6,8];
buscarElemento(listaParaBusqueda, 6);

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaDosListas(lista1, lista2){
    let listaNueva = [];
    if (lista1.length !== lista2.length){
        console.log("Error, las 2 listas no contienen la misma cantidad de elementos");
        return;
    }
        for (let i=0; i < lista1.length; i++){
            listaNueva.push(lista1[i] + lista2[i]);
            // Lo mismo que: listaNueva[i] = lista1[i]+lista2[i];
        }
        return console.log("La nueva lista es: " +listaNueva);
}
let listaA = [1,3,5,7,9];
let listaB = [2,4,6,8,10];
sumaDosListas(listaA, listaB);

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeLista(lista){
    let listaAlCuadrado = [];
    for (let i=0; i < lista.length; i++){
        listaAlCuadrado.push(lista[i] * lista[i]);
    }
    return console.log("La lista al cuadrado es: " +listaAlCuadrado);
}
let listaEjemploCuadrados = [2,4,8,16,1];
cuadradoDeLista(listaEjemploCuadrados);

