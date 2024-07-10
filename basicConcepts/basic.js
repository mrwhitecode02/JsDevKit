let greet = document.getElementById('hello').innerHTML;

greet = "Hello";

let fill = `${greet} Joseph`;

document.getElementById('hello').innerHTML = fill;


// basic concepts

/**
 *  * symbol means
 *  ? concepts knowed
 *  ! new concepts
 */

/** Section 1
 * ? variables
 * ? data types
 * ? comments
 * ? operators
 */


//* Variables

/**
 * notes
 * - datos numericos: enteros, decimales y punto flotante
 * - datos de cadenas: secuencia de caracteres
 * - datos boolean: datos binarios
 * - datos undefined: datos indefinidos
 * - datos null = que no existen, son nullos
 */

//* ways to declarate variables

var name = "Joseph"; // ! less used it and don't support

let nombre = "Hill";

const apellido = "Blanco";

let pr;

pr = 8;

let good = 8.2;

//nested variables
let p, u, s;

p = 8;

u = 74;

s = 8.5;

let fillOne = p * u;

let fillTwo = s + u * p;

console.log(name);
console.log(nombre);
console.log(apellido);
console.log(pr);
console.log(typeof(good));
console.log(fillOne);
console.log(fillTwo);