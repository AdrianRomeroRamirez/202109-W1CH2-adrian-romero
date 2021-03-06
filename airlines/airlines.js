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

// Se pide el nombre al usuario
let user = prompt('Por favor, introduzca su nombnre.');

// Si no lo introiduce, se le asigna "invitado"
if (user === null) {
  user = 'Invitado';
}

// Se le saluda por consola
console.log('Hola ' + user);

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
      (element.scale ? ' si tien escala.' : ' no hay escala.')
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
