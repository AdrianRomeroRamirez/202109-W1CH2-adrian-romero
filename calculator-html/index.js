const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

// Por cada click en un botón numérico, agrega el número al display
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Por cada click a un botón de operador, llama al metodo computar con el valor del botón
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});