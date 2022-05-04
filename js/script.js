

// chiedere il numero di km
const numeroKm = parseInt(prompt("Quanti km devi percorrere?"));

console.log(numeroKm);

// chiedere l'eta
const eta = parseInt(prompt("Quanti anni hai?"));

console.log(eta);

// calcolare prezzo tot biglietto

const prezzoAlKm = 0.21;

let prezzoTotBiglietto = numeroKm * prezzoAlKm;
console.log("il prezzo del tuo biglietto è " + prezzoTotBiglietto);


// SE minorenne applicare sconto del 20%
if (eta < 18){

    prezzoTotBiglietto = prezzoTotBiglietto - ((prezzoTotBiglietto * 20) / 100);
    console.log("il prezzo scontato del 20 è " + prezzoTotBiglietto);

    document.getElementById("sconto_minorenne").innerHTML = "Hai diritto ad uno sconto del 20% poichè sei minorenne.";
// SE over 65 applicare sconto del 40%
} else if (eta > 65){

    prezzoTotBiglietto = prezzoTotBiglietto - ((prezzoTotBiglietto * 40) / 100);
    console.log("il prezzo scontato del 40 è " + prezzoTotBiglietto);

    document.getElementById("sconto_over").innerHTML = "Hai diritto ad uno sconto del 40% poichè sei over 65";

}

prezzoTotBiglietto = prezzoTotBiglietto.toFixed(2);

// output

document.getElementById("prezzo_biglietto").innerHTML = "Il prezzo totale del tuo biglietto è " + prezzoTotBiglietto;
