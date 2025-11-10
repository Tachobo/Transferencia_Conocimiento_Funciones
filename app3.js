import { calcularSubtotal, sumaSubtotales, calcularIva, calcularTotalConIva, } from "./Modulo/index.js";

const cajaProductos = () =>{
/*se pide la cantidad de productos*/
    const cantidadProductos = parseInt(prompt("¿Cual es el numero de productos?"));
/*Se asigna un acumulador para ir guardando el valor total de los productos,
sin el iva*/
    let totalSinIva = 0;
/*se hace un ciclo, para que todo el proceso pare, hasta que i sea igual a la
cantidad de productos que se dijito inicialmente*/
    for(let i = 1; i <= cantidadProductos; i++){
/*se pide el nombre, precio, y cantidad del producto*/
    let nombre = prompt (`Por favor, digite el nombre del producto #${i}`);
    let precio = parseFloat(prompt(`Por favor digite el precio de ${nombre}`));
    let cantidad = parseInt(prompt("Por favor digite la cantidad del producto"));
    /*Se calcula el subtotal individual de los productos*/
    let subtotal = calcularSubtotal(precio, cantidad);
    alert(`Subtotal de ${nombre}: $${subtotal}`);
    /*calculamos el total sin el iva, sumando todos los subtotales, para eso
    se llama la funcion sumarSubtotales*/
    totalSinIva = sumaSubtotales(totalSinIva, subtotal);
}
    /*Calculamos el iva, llamando la funcion calcularIva*/
    let iva = calcularIva(totalSinIva);
    /*calculamos el total de toda la compra, aplicandole el iva*/
    let totalConIva = calcularTotalConIva(totalSinIva, iva); 
    /*Se imprime los resultados*/
    alert(`
    Recibo de su compra:
    Total sin iva incluido: $${totalSinIva}
    el iva es de: $${iva}
    Total con iva incluido: $${totalConIva}`)
}
cajaProductos();