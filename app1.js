/* Aquí, importamos las funciones desde el index.js que está en la carpeta Modulo*/
import{ calcularPromedio, apruebaOreprueba} from "./Modulo/index.js";
/* Denominamos la funcion principal*/
function programaPrincipal () {
/* pedimos los datos necesarios para el programa*/
    const nombre = prompt("Por favor, ingrese el nombre del estudiante");
    const n1 = parseFloat(prompt("Por favor, ingrese la nota 1"));
    const n2 = parseFloat(prompt("Por favor, ingrese la nota 2"));
    const n3 = parseFloat(prompt("Por favor, ingrese la nota 3"));
/*Llamamos la funcion calcularPromedio, valga la redundancia, para calcular el promedio */
    const promedio = calcularPromedio(n1, n2, n3);
/*Llamamos la funcion apruebaOreprueba, para mostrar mostrar si el pobre, aprueba o se raja*/
    const notaFinal = apruebaOreprueba(promedio);
    alert(`Estudiante: ${nombre}, su nota es: ${promedio}, el resultado del curso es
        ${notaFinal}`);
} 

programaPrincipal();