
let prices = document.getElementsByClassName("precio");
console.log(prices.length);
let qties = document.getElementsByClassName("conta-cantidad");
console.log(qties.length);


function imprimirPrecio() {
    let subtotal = 0;
    if(prices.length == 1){
        prices = document.querySelector(".precio");
        qties = document.querySelector(".conta-cantidad");
        let precioItem = parseFloat(prices.value * qties.value);
        subtotal += precioItem;
    
    }
    
    if(prices.length>1){
        for (let i = 0; i < prices.length; i++) {
            let precioItem = parseFloat(prices[i].value * qties[i].value);
            subtotal += precioItem;
        }

    }

    let tasas = 0.10;
    let totalTasas = subtotal * tasas;
    totalFactura = subtotal + totalTasas+ 2.5;
    document.getElementById("subtotal").innerHTML = subtotal  + "&#8364";
    document.getElementById("tasas").innerHTML = totalTasas.toPrecision(2) + "&#8364";
    document.getElementById("total").innerHTML = totalFactura + "&#8364";

}
imprimirPrecio();