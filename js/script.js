var km = prompt ('Inserire il numero di chilometri che vuole percorrere');
var year = prompt('Inserire l\'anno di nascita');

var today = new Date();
var age =  today.getFullYear() - year;

var salePensionaer = sp;
var saleMinor = sm;
var priceElement = document.getElementById('price');
var price = km * 0.21;
var sm = price - (price / 100 * 20);
var sp = price - (price / 100 * 40);



if (age < 18) {
    priceElement.innerHTML = 'L\'importo totale da pagare:'  + ' ' + sm + ('€');
} else if (age > 65)   { 
    priceElement.innerHTML = 'L\'importo totale da pagare:'  + ' ' + sp + ('€');

} else {
   priceElement.innerHTML = 'L\'importo totale da pagare:'  + ' ' + price + ('€');
}
