var km = prompt ('Inserire il numero di chilometri che vuole percorrere');
var age = prompt('Inserire l\'età del passaggero');

var priceElement = document.getElementById('price');

var price = km * 0.21;
var saleMinor = price - price / 100 * 20;
var salePensioner = Math.round((price - 40 / 100) * 100) / 100;

if (age < 18) {
    priceElement.innerHTML = saleMinor ;
} else if (age >= 65)   { 
    priceElement.innerHTML = salePensioner ;

} else {
    document.getElementById('price').innerHTML = price;
}
