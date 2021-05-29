var km = prompt ('Inserire il numero di chilometri che vuole percorrere');
// var day = promt (' Inserire il giorno di nascita del viaggiatore');
// var month = prompt ('Inserire il mese di nascita del viaggiatore')
// var year = prompt ('Inserire l\'anno di nascita del viaggiatore')
var age = prompt('Inserire l\'età del passaggero');

var priceElement = document.getElementById('price');

var price = km * 0.21;
var saleMinor = price - (price / 100 * 20);
var salePensioner = price - (price / 100 * 40);


if (age < 18) {
    priceElement.innerHTML = 'L\'importo totale da pagare:'  + saleMinor + ('€');
} else if (age > 65)   { 
    priceElement.innerHTML = 'L\'importo totale da pagare:'  + salePensioner + ('€');

} else {
   priceElement.innerHTML = 'L\'importo totale da pagare:'  + price + ('€');
}
