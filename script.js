// El juego selecciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random() * 10) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

// Acción para el botón de confirmar
function resultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 10 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor ingrese un número válido entre 1 y 10';
        mensaje.style.color = '#fff';
        mensaje.style.fontSize = '18px';
        mensaje.style.fontWeight = 'bold';
        mensaje.style.backgroundColor = '#11202a';
        mensaje.style.padding = '10px';
        mensaje.style.borderRadius = '5px';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! Has adivinado el número.';
        mensaje.style.color = 'green';
        mensaje.style.fontSize = '20px';
        mensaje.style.fontWeight = 'bold';
        mensaje.style.backgroundColor = 'lightgreen';
        mensaje.style.padding = '10px';
        mensaje.style.borderRadius = '5px';
        numeroEntrada.disabled = true;
        document.querySelector('button').disabled = true;

    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = `Más alto! El número es mayor que ${numeroIngresado}.`;
        mensaje.style.color = '#fff';
        mensaje.style.fontSize = '18px';
        mensaje.style.fontWeight = 'bold';
        mensaje.style.backgroundColor = '#562155';
        mensaje.style.padding = '10px';
        mensaje.style.borderRadius = '5px';

    } else {
        mensaje.textContent = `Más bajo! El número es menor que ${numeroIngresado}.`;
        mensaje.style.color = '#fff';
        mensaje.style.fontSize = '18px';
        mensaje.style.fontWeight = 'bold';
        mensaje.style.backgroundColor = '#562155';
        mensaje.style.padding = '10px';
        mensaje.style.borderRadius = '5px';
    }
}
