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



  