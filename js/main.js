const btnJugar = document.getElementById('btnJugar');
const historial = document.querySelector('.historial');
const listaHistorial = document.querySelector('.listaHistorial');
const divPuntajeHumano = document.querySelector('.puntajeHumano');
const divPuntajeMaquina = document.querySelector('.puntajeMaquina');

let puntajeHumano = 0;
let puntajeMaquina = 0;


const OPCIONES = {
    TIJERA: 'TIJERA',
    PAPEL: 'PAPEL',
    PIEDRA: 'PIEDRA',
}

Object.freeze(OPCIONES);
Object.seal(OPCIONES);


const getOpcionMaquina = () => {
    const arr = Object.values(OPCIONES);
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const pedirOpcion = () => {

    let opcion = null;
    let respuesta = null;
    try {
        do {
            respuesta = prompt('Ingrese una opcion');
    
            respuesta = typeof respuesta === 'string' ? respuesta.toUpperCase() : respuesta;

            switch (respuesta) {
                case OPCIONES.TIJERA:
                case OPCIONES.PAPEL:
                case OPCIONES.PIEDRA:
                    opcion = respuesta;
                    break;
                case null:
                    opcion = respuesta;
                    break
                default:
                    alert('Opcion invalida');
                    break;
            }
        } while (!opcion && opcion != null);
    } catch (err) {
        console.log('Error al elegir opcion')
    }
    

    return opcion;
}

const calcularResultado = (opcionJugador, opcionMaquina) => {

    const partida = document.createElement('li');

    if(opcionJugador === opcionMaquina) {
        partida.innerText = `Empate | ${opcionJugador} - ${opcionMaquina}`;

    } else if ((opcionJugador === OPCIONES.PIEDRA && opcionMaquina === OPCIONES.TIJERA) ||
        (opcionJugador === OPCIONES.PAPEL && opcionMaquina === OPCIONES.PIEDRA) ||
        (opcionJugador === OPCIONES.TIJERA && opcionMaquina === OPCIONES.PAPEL)) {
            partida.innerText = `Humano gano, Maquina perdio | ${opcionJugador} - ${opcionMaquina}`;
            puntajeHumano++;
            divPuntajeHumano.innerText = puntajeHumano;


    } else {
        partida.innerText = `Maquina gano, Humano perdio | ${opcionJugador} - ${opcionMaquina}`;
        puntajeMaquina++;
        divPuntajeMaquina.innerText = puntajeMaquina;

    }

    listaHistorial.appendChild(partida);


}

btnJugar.addEventListener('click', () => {
    const opcionMaquina = getOpcionMaquina();
    const opcionJugador = pedirOpcion();

    if (opcionJugador && opcionMaquina) {
        calcularResultado(opcionJugador, opcionMaquina);
        
    }
});