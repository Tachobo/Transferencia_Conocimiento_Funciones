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

/* Función PRODUCTOS*/

/*Aqui se calcula el subtotal por producto multiplicando el precio del producto
, por la cantidad del mismo */
function calcularSubtotal(precio, cantidad){
    return precio * cantidad;
}
/*Aqui en esta funcion se calcula el subtotal total de todos los productos
y se suman, subTotalActual es el subtotal que se lleva en ese momento y,
el subtotal es el resultado del producto*/
function sumaSubtotales(subtotalActual, subtotal){
    return subtotalActual + subtotal;
}

/*Acá se calcula el iva, multiplicando el total sin el iva, con 0.19, ese totalsiniva 
se nombra en el programa principal*/
function calcularIva(totalSinIva){
    return totalSinIva * 0.19;
}

/*Y ahora se hace la funcion para calcular el total con el iva incluido*/
function calcularTotalConIva(totalSinIva, iva){
    return totalSinIva + iva;
}
export {calcularSubtotal, sumaSubtotales, calcularIva, calcularTotalConIva};

/*Funciones Analisis Numeros*/

/*priemra funcion, determinamos si el numero es par o impar. en base a si al dividirlo
por dos, deja residuo, o no, si deja residuo no es par, si no deja residuo, es par*/
function esParImpar (numero){
    if(numero % 2 === 0){
        return "Es Par"
    }
    else{
        return "Es Impar"
    }
}
/*Segunda funcion, numero es positivo, o negativo*/
function positivoNegativo(numero){
    if (numero > 0){
        return "es positivo";
    }
    else if (numero < 0){
        return "es negativo";
    }
    else{
        return "El cero es neutro, joven"
    }
}
/*Tercera Funcion, para saber si el numero es primo o no, dado que, el numero 1
no cuenta como primo y los negativos tampoco son primos, deben ser enteros positivos, 
se debe empesar del 2 en adelante, */
function esPrimo(numero){
    if (numero <= 1){
        return "No es primo";
    }
/*Si el numero tiene un divisor diferente al 1 y el mismo, no es primo*/
    for (let i = 2; i < numero; i++){
        if (numero % i ===0){
            return "No es primo";
        }
    }
    return "Es Primo";
}
export{ esParImpar, positivoNegativo, esPrimo};