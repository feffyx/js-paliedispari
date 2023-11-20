// PALINDROMA:

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
let parolaUtente = prompt("Inserisci una parola:");

// RICONOSCERE SE LA PAROLA È PALINDROMA
if (isPalindrome(parolaUtente)) {
    console.log(parolaUtente + " è una parola palindroma!");
  } else {
    console.log(parolaUtente + " non è una parola palindroma.");
  }

  // FUNZIONE PER VERIFICARE SE LA PAROLA È PALINDROMA
  function isPalindrome(parola) {
    parola = parola.toLowerCase();  
    return parola === parola.split('').reverse().join('');
  }


  // PARI E DISPARI:

  // CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
  let sceltaUtente = prompt("Scegli pari o dispari:");

  // CHIEDERE ALL'UTENTE UN NUMERO DA 1 A 5
  let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

  // IL COMPUTER GENERA UN NUMERO RANDOM DA 1 A 5 USANDO UNA FUNZIONE
  function numeroComputer() {
    return Math.floor(Math.random() * 5) +1;
  }

  // SOMMA I DUE NUMERI
  let sommaNumeri = numeroUtente + numeroComputer;

  // VERIFICA SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI
  function isPariDispari(somma) {
    return somma % 2 === 0;
  }
  let risultato;
  if (isPariDispari(sommaNumeri)) {
    risultato = "pari";
  } else {
    risultato = "dispari";
  }
  
  // DICHIARA CHI HA VINTO
  if (sceltaUtente === risultato) {
    console.log("Hai vinto. La somma è " + risultato + ".");
  } else {
    console.log("Hai perso. La somma è " + risultato + ".");
  }
  