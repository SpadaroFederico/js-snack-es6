// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var biciclette = [
    bici_rossa = {
        nome: 'Aquila',
        peso: '11kg',
    },
    bici_verde = {
        nome: 'Fortezza',
        peso: '12,5 kg',
      },
    bici_gialla = {
        nome: 'Urba',
        peso: '10,2 kg',
      },
    bici_blu = {
        nome: 'Eco',
        peso: '14,8 kg',
      },
    bici_nera = {
        nome: 'Titan ',
        peso: '16,3 kg',
      },
  ];

// Trovo la bici con il peso minore usando un ciclo e if
let lightestBike = biciclette[0];
for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].weight < lightestBike.weight) {
        lightestBike = biciclette[i];
    }
}

// Stampo a schermo la bici con il peso minore
console.log("La bici più leggera è:", lightestBike);

// snack2
// Array di squadre
var squadre = [
  { nome: 'Juventus', punti: 0, falli: 0 },
  { nome: 'Napoli', punti: 0, falli: 0 },
  { nome: 'Roma', punti: 0, falli: 0 },
  { nome: 'Inter', punti: 0, falli: 0 },
  { nome: 'Milan', punti: 0, falli: 0 },
];

// Funzione per generare numeri casuali
const generaNumeroCasuale = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Genero numeri casuali per punti e falli
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = generaNumeroCasuale(1, 100);
  squadre[i].falli = generaNumeroCasuale(1, 100);
}

// Creo un nuovo array con solo nomi e falli subiti
const nomiFalli = squadre.map(squadra => ({
  nome: squadra.nome,
  falli: squadra.falli
}));

// Stampo tutto in console
console.log("Squadre aggiornate:", squadre);
console.log("Array con nomi e falli subiti:", nomiFalli);
