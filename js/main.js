import prompt from 'async-prompt'
import { getAllProfile, postProfile } from './module/camper.js'

// console.log(await getAllProfile());

let name = await prompt("Ingrese el nombre: ");
let edad = await prompt("Ingrese la edad: ");
console.log(await postProfile(name, edad));