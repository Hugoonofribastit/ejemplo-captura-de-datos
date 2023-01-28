const obtenerDatos = (event) =>{
event.preventDefault();
let nombre = document.getElementById('nombre').value;
let edad = document.getElementById('edad').value;

document.formulario.nombreobtenido.value = nombre;
document.formulario.edadobtenida.value = edad;

console.log(nombre);
console.log(edad);

}