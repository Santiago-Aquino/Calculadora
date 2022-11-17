const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const borrarTodo = document.getElementById('borrarTodo');
const borrarUno = document.getElementById('borrarUno');
const botonIgual = document.getElementById('igual');
let resultado = document.getElementById('result');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;


// funciones o metodos

function agregarNumero(num){
    if(num === '.' && operacionActual.includes('.')) return;
    operacionActual = operacionActual.toString() + num.toString();
    mostrarDisplay();
};

function mostrarDisplay(){
    resultado.textContent = operacionActual; 
};


function clearAll(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
    mostrarDisplay();
};

function clear(){
    operacionActual = operacionActual.slice(0,-1);
    mostrarDisplay();
}


function seleccionaOperador(operador){
    if(operador === ''){
        return;
    } else{
        calcular();
    }
    operacion = operador.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular(){
    let calculo;
    let anterior = parseFloat(operacionAnterior);
    let actual = parseFloat(operacionActual);
    if(isNaN(actual) || isNaN(anterior)) return;
    switch (operacion) {
        case '+':
             calculo = anterior + actual;
            break;
        case '-':
             calculo = anterior - actual;
            break;
        case 'x':
             calculo = anterior * actual;
            break;
        case '/':
             calculo = anterior / actual;
            break;
        default:
            break;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

// eventos

numeros.forEach((numero) => {
    numero.addEventListener('click', () =>{
        agregarNumero(numero.innerText);
    })
});

operadores.forEach((operador) => {
    operador.addEventListener(('click'), () => {
        seleccionaOperador(operador.innerText);
    })
})

botonIgual.addEventListener(('click'), () =>{
    calcular();
    mostrarDisplay();
})


borrarTodo.addEventListener('click', () => {
    clearAll();
});


borrarUno.addEventListener(('click'), () => {
    clear();
})