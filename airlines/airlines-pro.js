// Lista con los vuelos
let flights = [
  { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

  { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

  { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

  { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

  { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

  { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

  { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

  { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

  { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

  { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

let vuelosConEscsalas = 0;
let costeTotal = 0;
let totalVuelos = 0;
let costeMedio = 0;
let mood;
let accionAdmin;

// Se pide el nombre al usuario
let nameUser = prompt('Por favor, introduzca su nombre.');

// Si no lo introiduce, se le asigna "invitado"
if (nameUser === '' || nameUser == null) {
  nameUser = 'Invitado';
}

// Se le saluda por consola
console.log('Hola ' + nameUser);

// Se recorre el array de vuelos mostrando los datos por consola usando la función mostrarDatos
flights.forEach(mostrarDatos);

// Muestra los datos por consola, cuenta los vuelos con escalas, el coste total de los vuelos y el total de vuelos
function mostrarDatos(element, index, array) {
  console.log(
    'El vuelo con origen: ' +
      element.from +
      ' y destino: ' +
      element.to +
      ', tiene un coste de ' +
      element.cost +
      '€ y' +
      (element.scale ? ' si tiene escala.' : ' no hay escala.')
  );

  costeTotal = costeTotal + element.cost;
  totalVuelos++;

  if (element.scale) {
    vuelosConEscsalas++;
  }
}

// Calcula el coste medio
costeMedio = costeTotal / totalVuelos;

// Muestra por consola  el coste medio
console.log(
  'Todos los vuelos tienen un coste medio de ' + costeMedio.toFixed(2) + '€'
);

// Muestra por consola los vuelos con escalas
console.log('Hay ' + vuelosConEscsalas + ' vuelos con escalas.');

console.log('Los ultimos 5 destinos del día son:');

// Recorre los 5 últimos vuelos
for (let i = flights.length - 1; i > flights.length - 6; i--) {
  console.log(flights[i].to);
}

do {
  // Se pide si es admin o user
  mood = prompt('Eres ADMIN  o USER?');

  mood = mood.toUpperCase();

  // si es admin se ejecuta la función admin hasta que el cliente quiera
  if (mood === 'ADMIN') {
    do {
      admin();
    } while (confirm('Queres seguir en el modo ADMIN?'));
  }

  // si es user
  if (mood === 'USER') {
    do {
      user();
    } while (confirm('Queres seguir en el modo USER?'));
  }

  // reitera mientras no se introduzca una de las dos opciones
} while (mood !== 'ADMIN' && mood !== 'USER');

// modo admin
function admin() {
  do {
    // pregunta al usuario que quiere hacer
    accionAdmin = prompt('Que quieres hacer? (crear/eliminar)');

    accionAdmin = accionAdmin.toUpperCase();

    // modo crear vuelo
    if (accionAdmin === 'CREAR') {
      console.log('crear');

      let idN = Number(flights[flights.length - 1].id) + 1;
      let toN = prompt('Hacia donde va el vuelo?');
      let fromN = prompt('De donde viene el vuelo?');
      let costN = Number(prompt('Cuento cuesta?'));
      let scaleN = prompt('Hace escala? (true/false)');
      let boolValue = JSON.parse(scaleN);

      let newFlight = {
        id: idN,
        to: toN,
        from: fromN,
        cost: costN,
        scale: boolValue,
      };

      if (flights.length < 15) {
        flights.push(newFlight);
      } else {
        console.log('Ya hay 15 vuelos registrados, no se pueden registrar mas');
      }

      flights.forEach(mostrarDatos);
    }

    // modo eliminar vuelo, pregunta por el id, lo elimina y muestras los vuelos restantes
    if (accionAdmin === 'ELIMINAR') {
      let num = preguntarNum();

      let vueloAEliminar = flights.find((element) => element.id == num);

      removeItemFromArr(flights, vueloAEliminar);

      flights.forEach(mostrarDatos);
    }
  } while (accionAdmin !== 'CREAR' && accionAdmin !== 'ELIMINAR');
}

function user() {
  let precio = preguntarNum();

  do {
    // pregunta al usuario que quiere buscar
    let accionUser = prompt(
      'Que quieres buscar? Más alto, más bajo o igual? (alto/bajo/igual)'
    );

    accionUser = accionUser.toUpperCase();

    //
    if (accionUser === 'ALTO') {
      console.log('alto');

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost > precio) {
          console.log(flights[i].to);
        }
      }
    }

    //
    if (accionUser === 'BAJO') {
      console.log('bajo');

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost < precio) {
          console.log(flights[i].to);
        }
      }
    }

    //
    if (accionUser === 'IGUAL') {
      console.log('igual');

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost == precio) {
          console.log(flights[i].to);
        }
      }
    }

    alert('Indique a continuación el Id del vuelo que quieras reservar');

    let idVuelo = preguntarNum();

    alert(
      'Vuelo con id: ' +
        idVuelo +
        ' a sido reservado. Gracias por su compra, vuelva pronto.'
    );
  } while (
    accionUser !== 'ALTO' &&
    accionUser !== 'BAJO' &&
    accionUser !== 'IGUAL'
  );
}

// elimina el elemneto pasado por parámetro del array tambien pasado
function removeItemFromArr(arr, item) {
  var i = arr.indexOf(item);

  if (i !== -1) {
    arr.splice(i, 1);
  }
}

// Función que pide un numero y avisa y reitera hasta que no se introduzca
function preguntarNum() {
  let num;
  do {
    // Pide el numero
    num = prompt('Introduce un número');

    if (isNaN(num)) {
      alert('No es un número');
    }

    // No sale hasta que se introduzca un número
  } while (isNaN(num));
  return num;
}
