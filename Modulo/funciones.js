/* Está funcion sirve para calcular el promedio de las 3 notas
sumandolas y dividiendo ese resultado entre 3*/
function calcularPromedio(n1, n2, n3,){
    return(n1 + n2 + n3)/3;
}

/*Por otro lado, está recibe ese promedio, y en base al resultado
le dice al pelado si aprueba, o no aprueba*/ 
function apruebaOreprueba( promedio){
    if(promedio>=3.0){
        alert(`Su nota es: ${promedio}, bien ahi pelado
            Aprobó`)
    }
    else{
        alert(`Su nota es ${promedio}, reprobó, lo van
            a desbaratar cuando llegue a la casa`)
    }
}
/* Acá este se exporta las funciones, para poder usarlas en el programa
principal*/
export {calcularPromedio, apruebaOreprueba};