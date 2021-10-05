// Arrays con preguntas
const questions1 = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }

]

const questions2 = [

    { letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha" },

    { letter: "b", answer: "botiquín", status: 0, question: "CON LA B. Caja en la que se guardan medicinas" },

    { letter: "c", answer: "camilla", status: 0, question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos" },

    { letter: "d", answer: "dedicatoria", status: 0, question: "CON LA D. Palabras que se escriben y se dicen como regalo a alguien" },

    { letter: "e", answer: "empañar", status: 0, question: "CON LA E. Mancharse un cristal con el vapor de agua" },

    { letter: "f", answer: "fábula", status: 0, question: "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja" },

    { letter: "g", answer: "guisar", status: 0, question: "CON LA G. Preparar alimentos cocinándolos con calor" },

    { letter: "h", answer: "hamaca", status: 0, question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama" },

    { letter: "i", answer: "imperdible", status: 0, question: "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho" },

    { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que monta a caballo" },

    { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla" },

    { letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra" },

    { letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite" },

    { letter: "n", answer: "nuca", status: 0, question: "CON LA N. Parte posterior de la cabeza situada encima del cuello" },

    { letter: "ñ", answer: "teñir", status: 0, question: "CONTIENE LA Ñ.  Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados" },

    { letter: "o", answer: "orilla", status: 0, question: "CON LA O. Borde del mar, de un lago o de un río" },

    { letter: "p", answer: "planchar", status: 0, question: "CON LA P. Quitar las arrugar a una prenda" },

    { letter: "q", answer: "quitamanchas", status: 0, question: "CON LA Q. Producto natural o preparado que sirve para quitar manchas" },

    { letter: "r", answer: "racimo", status: 0, question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo" },

    { letter: "s", answer: "sembrar", status: 0, question: "CON LA S. Enterrar semillas en la tierra para que crezcan" },

    { letter: "t", answer: "taburete", status: 0, question: "CON LA T. Asiento sin respaldo " },

    { letter: "u", answer: "untar", status: 0, question: "CON LA U. Extender mantequilla sobre una rebanada de pan" },

    { letter: "v", answer: "vecino", status: 0, question: "CON LA V. V Persona que vive en el mismo barrio o edificio que otra" },

    { letter: "w", answer: "wifi", status: 0, question: "CON LA W. W Sistema de conexión inalámbrica para conectarse a internet" },

    { letter: "x", answer: "fénix", status: 0, question: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas." },

    { letter: "y", answer: "yunque", status: 0, question: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo" },

    { letter: "z", answer: "zumbido", status: 0, question: "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito." }

]

const questions3 = [

    { letter: "a", answer: "ajo", status: 0, question: "CON LA A. Planta con raíz comestible, de color blanco y olor fuerte" },

    { letter: "b", answer: "baston", status: 0, question: "CON LA B. Palo de madera que sirve para apoyarse al andar" },

    { letter: "c", answer: "cactus", status: 0, question: "CON LA C. Planta verde con muchas espinas" },

    { letter: "d", answer: "danzar", status: 0, question: "CON LA D. Moverse al ritmo de una música" },

    { letter: "e", answer: "embudo", status: 0, question: "CON LA E. Objeto con forma de cono que se utiliza para pasar líquidos de un recipiente a otro" },

    { letter: "f", answer: "fauces", status: 0, question: "CON LA F. Boca y dientes de animales muy fieros" },

    { letter: "g", answer: "gatear", status: 0, question: "CON LA G. Avanzar con las rodillas y las palmas de las manos" },

    { letter: "h", answer: "hambre", status: 0, question: "CON LA H. Sensación que provocan las ganas de comer" },

    { letter: "i", answer: "interruptor", status: 0, question: "CON LA I. Aparato que se usa para abrir o cerrar el paso de la corriente eléctrica" },

    { letter: "j", answer: "jungla", status: 0, question: "CON LA J. Selva propia del clima tropical." },

    { letter: "k", answer: "kechup", status: 0, question: "CON LA K. Salsa de tomate condimentada con vinagre, azúcar y especias" },

    { letter: "l", answer: "ladrillos", status: 0, question: "CON LA L. Pieza de arcilla con la que se construyen muros" },

    { letter: "m", answer: "manada", status: 0, question: "CON LA M. Grupo de animales de la misma especie que van juntos" },

    { letter: "n", answer: "nana", status: 0, question: "CON LA N. Canción de cuna que se canta a los bebés para que se duerman." },

    { letter: "ñ", answer: "gruñido", status: 0, question: "CONTIENE LA Ñ. Sonido que hace el cerdo" },

    { letter: "o", answer: "oculista", status: 0, question: "CON LA O.  Médico especialista en las enfermedades de los ojos" },

    { letter: "p", answer: "pesadilla", status: 0, question: "CON LA P. Sueño que produce angustia o temor" },

    { letter: "q", answer: "quirofano", status: 0, question: "CON LA Q. Habitación de hospital donde los médicos realizan las operaciones" },

    { letter: "r", answer: "raiz", status: 0, question: "CON LA R. Parte por la que se alimenta una planta, que está bajo tierra" },

    { letter: "s", answer: "susurrar", status: 0, question: "CON LA S.  Hablar muy bajito" },

    { letter: "t", answer: "talon", status: 0, question: "CON LA T. Parte posterior del pie de una persona" },

    { letter: "u", answer: "umbral", status: 0, question: "CON LA U. Parte inferior de una puerta" },

    { letter: "v", answer: "vacaciones", status: 0, question: "CON LA V. Tiempo de descanso en el que las personas no trabajan o no van al colegio" },

    { letter: "w", answer: "walabi", status: 0, question: "CON LA W. Animal marsupial que habita en Australia. Se parece al canguro pero es de menor tamaño" },

    { letter: "x", answer: "extremidades", status: 0, question: "CONTIENE LA X. Órganos externos, articulados con el tronco, que cumplen funciones de locomoción, vuelo o manipulación de objetos en los animales" },

    { letter: "y", answer: "yegua", status: 0, question: "CON LA Y. Hembra del caballo" },

    { letter: "z", answer: "zurda", status: 0, question: "CON LA Z. Persona que habitualmente utiliza su mano o pie izquierdos" }

]

// Array con un ranking predeterminado
const ranking = [
    { name: "Marie Curie", puntos: 27 },

    { name: "Rick Sanchez", puntos: 25 },

    { name: "Mileva Einstein", puntos: 20 },

    { name: "Alber Einstein", puntos: 13 },

    { name: "Homer Simpson", puntos: 0 }

]

const arrayQuestions = [questions1, questions2, questions3] // Array con los array de preguntas
const numRandom = Math.round(Math.random() * 2) // Número random para elegir el array
const questionsFinal = arrayQuestions[numRandom] // Array final de preguntas

let acertadas = 0;
let falladas = 0;

// Instrucciones
alert("Las respuestas correctas suman un punto, las respuestas con la palabra 'pasapalabra' pasan de turno y se vuelve a repetir la pregunta. Las respuestas erroneas, vacias o canceladas, se dan por malas.");

// Nombre del concursante
const nombre = prompt("Ingresa tu nombre.");

// Mientras haya preguntas en el array
while (questionsFinal.length > 0) {

    // Itera por cada pregunta del array
    for (i = 0; i < questionsFinal.length; i++) {
        let respuestaCorrecta = questionsFinal[i].answer;
        let respuesta = prompt(questionsFinal[i].question);

        // Si no es null, se transforma todo en minúsculas
        if (respuesta != null) {

            respuesta = respuesta.toLowerCase();

        }

        // Si la respuesta es correcta, se suma un punto, se borra la pregunta del array y se resta una unidad a la variable i para compensar el borrado de la pregunta
        if (respuesta == respuestaCorrecta) {

            acertadas++;

            questionsFinal.splice(i, 1);

            i--;

            alert("Correcto!!!");

        }

        // Si la respuesta no es correcta, se suma un punto a los fallos, se borra la pregunta del array y se resta una unidad a la variable i para compensar el borrado de la pregunta
        if (respuesta != respuestaCorrecta && respuesta != "pasapalabra") {

            falladas++;

            questionsFinal.splice(i, 1);

            i--;

            alert("Incorrecto!!! La respuesta correcta es: " + respuestaCorrecta);

        }

        // Si la respuesta es 'pasapalabra' no hace nada y se vuelve a repetir la pregunta cuando dé la vuelta

    }
}

alert(`Juego terminado con ${acertadas} preguntas acertadas y ${falladas} errores.`);

alert(mostrarRanking());

// Función que crea una cadena con el ranking, incluyendo al concursante actual
function mostrarRanking() {

    let cadena = "Ranking \n\n";

    for (let concursante of ranking) {

        if (acertadas >= concursante.puntos){
            cadena += `${nombre}: ${acertadas} puntos\n`;
            acertadas = -1;
        }

        cadena += `${concursante.name}: ${concursante.puntos} puntos\n`;

    }

    return cadena;

}