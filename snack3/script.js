/**
In un array sono contenuti i nomi degli invitati 
alla festa del grande Gatsby, 
chiedi all'utente il suo nome e comunicagli
se può partecipare o no alla festa.
**/

const invitati = [
    'Michela',
    'Fabbia',
    'Deshaun',
    'Luke',
    'Beatrice'
];

const userName = prompt("Inserisci il nome");
let userNameFound = false;

for (let i = 0; i < invitati.length; i++) {
    if (userName == invitati[i]) {
        userNameFound = true;
    }
}

if (userNameFound) {
    console.log("gg");
} else {
    console.log("not gg");
}
