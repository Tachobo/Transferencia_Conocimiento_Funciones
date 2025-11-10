/*Funciones NOTA ESTUDIANTE*/
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

/*Funciones BANCO */
/* Toca dejarlo fuera de la funcion, porque este es el que va a cambiar
se va ir actualizando el saldo, a medida que el cliente interactua con el 
programa*/ 
let saldo = 0; 
/*funcion de depositar dinero*/ 
function depositarDinero(valor){
    saldo += valor; /* Esta belleza de acá, es la encargada de 
sumar el valor ingresado, con el saldo que se tenia hasta ese momento*/
    return saldo; /*Y está otra de acá, se encarga de retornar el nuevo saldo*/
}

/* Funcion retirar dinero*/
function retirarDinero(valor){
/* Aquí se usa una condicional, si el valor que se va a retirar, 
es menor al saldo, se le resta al saldo ese valor, y se retorna
el saldo actualizado, de lo contrario, si el valor es mayor, le retorna
un mensaje de fondos insuficientes*/
    if(valor<=saldo){
        saldo-=valor;
        return saldo;
} else{
    return "No hay suficientes fondos, amigo"
}
}
/* Funcion consultarSaldo, hace eso, muestra el saldo*/
function consultarSaldo(){
    return saldo;
}
export { depositarDinero, retirarDinero, consultarSaldo};
