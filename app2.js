import{ depositarDinero, retirarDinero, consultarSaldo} from "./Modulo/index.js";

function cajeroCimi(){
/* Se pone afuera del while, para que guarde la opcion que escogio el 
usuario, y se siga repitiendo, hasta que se digite la opcion de salir*/
    let opciones;
/*Usamos el ciclo mientras que, para que el ciclo no termine hasta que,
el usuario ponga 4 */
    while(opciones !== 4){
/* acá mostramos le pedimos al cliente que digite una opción*/
        opciones = parseInt(prompt(
            `Menu cajeroCimi, seleccione la opción correspondiente
a la acción que desea realizar

            1. Depositar dinero
            2. Retirar dinero
            3. Consultar saldo
            4. Salir
            `
        ))
/*Acá se ponen las condicionales correspondientes a la opción*/
        if(opciones === 1){
/* Se ingresa el valor depositado, y se actualiza el saldo*/
            let valor = parseFloat(prompt("Ingrese el valor que desea depositar"));
            let saldoActualizado = depositarDinero (valor);
            alert (`Dinero depositado. Su saldo actual es: $${saldoActualizado}`);
        }
/* Si se ingresa la opcion dos, se pide el valor del retiro, se llama la funcion retirarDinero, si la respuesta
de esa funcion es que no hay suficientes fondos, imprime el mensaje de saldo insuficiente*/
        else if (opciones === 2){
            let valor = parseFloat(prompt("Ingrese el valor que desea retirar"));
            let resultado = retirarDinero(valor);

            if (resultado === "No hay suficientes fondos, amigo"){
                alert(`Lo siento compita, pero no tiene fondos suficientes para ese retiro`);
            }
/*Si el valor ingresado es menor al saldo, se realiza el retiro y se actualiza el saldo*/
            else {
                alert(`Retiro hecho, su saldo actual: $${resultado}`);
            }
            }
/* Si elige 3, se llama consultarSaldo, y se muestra el saldo que hay hasta el momento*/
            else if (opciones === 3){
                /* se ponen los parentesis junto al consultarSaldo, para que se ejecute y devuelva el saldo, si no, no muestra ningun saldo
                solamente el consultarSaldo*/
                alert(`Su saldo actual es de: $${consultarSaldo()}`);
            }
/* Si elige 4, el programa se termina, o si elige un valor que no es, se muestra opcion invalida*/
            else if (opciones === 4){
                alert (`Saliendo del sistema, nospi......llamos`);
            }
            else {
                alert(`Opción no valida mijo.`)
            }
    }
}
/* Llama la funcion principal cajeroCimi y la ejecuta*/
cajeroCimi();