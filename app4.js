import{ esParImpar, positivoNegativo, esPrimo} from "./Modulo/index.js";
function numeros(){
/*Se pide el número*/
let numero = parseInt(prompt(`Por favor, ingrese un número entero.
Recuerde que los numeros enteros son aquellos sin decimales, ejemplo (4,3,2,1)`));

/*Llamamos las funciones para que hagan lo suyo*/
let parImpar = esParImpar(numero);
let esPositivoNegativo = positivoNegativo(numero);
let seraPrimo = esPrimo(numero);

alert(`
    El número: ${numero}
    ${parImpar}, ${esPositivoNegativo}, ${seraPrimo}`);
}
numeros();
