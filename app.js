var tablero = document.getElementById('tablero')

var cartas = [1, 2, 3, 4, 5, 6, 7, 8];
var parejas = cartas.length

cartas = cartas.concat(cartas)
cartas = cartas.sort(function () {
    return Math.random() - 0.5
})

var primerCarta = 0
var segundaCarta = 0

function turno(event) {
    var elementoSeleccionado = event.target;


    if (primerCarta !== 0 && segundaCarta !== 0) {

        // limpiar banderas
        if (primerCarta.innerText !== segundaCarta.innerText) {
            primerCarta.classList.remove('open')
            segundaCarta.classList.remove('open')
        }

        primerCarta = 0
        segundaCarta = 0
    }

    elementoSeleccionado.classList.add('open')

    if (primerCarta === 0) {
        primerCarta = elementoSeleccionado
        console.log('Primer turno')
    } else {
        segundaCarta = elementoSeleccionado
        console.log('Segundo turno')

        if (primerCarta.innerText === segundaCarta.innerText) {
            parejas = parejas - 1
        }

        if (parejas === 0) {
            console.log('Ganaste', parejas)
            alert('Ganaste')
            location.reload()
        }
    }
}

var tablero = document.getElementById("tablero");
var contador = 0;

for (var i = 0; i < 4; i++) {

    var fila = document.createElement("div");
    fila.className = "row";
    for (var j = 0; j < 4; j++) {
        var columna = document.createElement("div");
        columna.className = "col-3";
        var elemento = document.createElement("div");
        elemento.className = "imagen";
        elemento.textContent = cartas[contador];
        columna.appendChild(elemento);
        fila.appendChild(columna);
        contador++;
    }
    tablero.appendChild(fila);
}
