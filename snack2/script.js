/**
Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
**/

let somma = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    if (! Number.isNaN(userNumber)) {
        somma += userNumber;
    }
}

console.log(somma);