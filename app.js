var tablero = document.getElementById('tablero')

var cubierta = [];  
var cartas = ["img/comida.jpg", "img/diversidad.jpg", "img/dulces.jpg", "img/juegos.jpg", "img/juguetes.jpg", "img/lugares.jpg", "img/muertos.jpg", 8];


    for(i=0; i<16; i++) {
        cubierta[i] = "img/comida.jpg"; 
    }




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

        // limpiar 
        if (primerCarta.src !== segundaCarta.src) {
            primerCarta.classList.remove('mostrar')
            primerCarta.classList.add("ocultar")
            segundaCarta.classList.remove('mostrar')
            segundaCarta.classList.add("ocultar")
        }

        primerCarta = 0
        segundaCarta = 0
    }
    elementoSeleccionado.classList.remove("ocultar")
    elementoSeleccionado.classList.add('mostrar')

    if (primerCarta === 0) {
        primerCarta = elementoSeleccionado
        console.log('Primer turno')
    } else {
        segundaCarta = elementoSeleccionado
        console.log('Segundo turno')

        if (primerCarta.src === segundaCarta.src) {
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
        columna.style.backgroundColor = "black"; 
        columna.addEventListener("click", turno, true);
        
        var elemento = document.createElement("img");
        elemento.className = "imagen";
        elemento.src = cartas[contador];
        
        elemento.className.add("ocultar");
        columna.appendChild(elemento);
        fila.appendChild(columna);
        contador++;
    }
    tablero.appendChild(fila);
}
