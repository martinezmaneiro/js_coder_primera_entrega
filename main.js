function calcularGastos() {
    let total = 0;
    let gastos = "";
    let nombreGasto;
    let precioGasto;
    let exit = false;

    while (!exit) {
        nombreGasto = prompt("Ingrese el nombre del gasto.");

        if (nombreGasto) {
            precioGasto = parseFloat(prompt("Ingrese el precio del gasto"));

            if (precioGasto < 0) {
                exit = true;
            }

            if (!isNaN(precioGasto) && precioGasto >= 0) {
                total += precioGasto;
                gastos += "- " + nombreGasto + "$ " + precioGasto + "\n";
            } else {
                exit = true;
            }
        } else { 
            exit = true; 
        }
    }


    if (gastos){
        console.log("Gastos ingresados:\n" + gastos);

        console.log("El total de gastos es de $" + total);
        alert("El total de gastos es de $" + total);
    } else {
        alert("No se ingresaron gastos o el formato de los mismos no es correcto.");
    }

}

calcularGastos();
