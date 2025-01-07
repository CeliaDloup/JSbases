// you can write js here

console.log('exo-5');

// 1. Créer une variable `input` qui prend pour valeur n'importe quelle phrase ou mot à traduire.
let input = "Turpentine and turtles";

// 2. Créer une variable `vowels` contenant toutes les voyelles de l'alphabet.
let vowels = ['a', 'e', 'i', 'o', 'u'];

// 3. Créer une variable `resultArray` pour stocker la chaîne traduite.
let resultArray = [];

// 4. Boucler sur chaque lettre de la chaîne `input`.
for (let i = 0; i < input.length; i++) {
  // Afficher la lettre courante 
  console.log(`Lettre courante : ${input[i]}`);
  
  // 5. Vérifier si la lettre courante est une voyelle avec `indexOf()`
  if (vowels.indexOf(input[i].toLowerCase()) !== -1) {
    // 7  Ajouter la voyelle au tableau `resultArray`
    resultArray.push(input[i]);
  }
}

// 6. Ecrire une seconde boucle à la place d'infexOf
for (let j = 0; j < vowels.length; j++) {
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
      break; // Sortir de la boucle dès qu'on trouve une voyelle
    }
  }
  

// 8. Convertir le tableau des voyelles en une chaîne sans espace et en majuscules
let whaleLanguage = resultArray.join('').toUpperCase();

// 9. Afficher le résultat final.
console.log(whaleLanguage);
