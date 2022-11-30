/**
L'utente inserisce un numero, con un prompt.
Il software stampa se l'utente è maggiorenne, se è anziano (>65) o se è un bambino (<14), oppure se l'età non è valida.
**/

userNumber = parseInt(prompt("Inserisci un numero"));

if (userNumber > 0 && userNumber < 125) {
    if (userNumber <= 14) {
        console.log("Sei minorenne");
    } else if (userNumber >= 65){
        console.log("Sei anziano");
    } else if (userNumber >= 18) {
        console.log("Sei maggiorenne");
    }
} else {
    console.warn("Hai inserito un numero minori di 0, oppure hai inserito un numero inverosimile!")
}