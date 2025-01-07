// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true




// 1. Creer une variable vide
let team = {};

// 2. Ajouter deux propriété vide à l'objet
team.players = [];
team.games = [];

// 3. Remplir le tableaux players

    team.players= [
        { firstName: "Marine", lastName: "Johannès", age: 29 },
        { firstName: "Marine", lastName: "Fauthoux", age: 22 },
        { firstName: "Gabby", lastName: "Williams", age: 28 },
        { firstName: "Iliana", lastName: "Rupert", age: 23 },
        { firstName: "Janelle", lastName: "Salaün", age: 20 }
    ]

// 4. Remplir le tableau games 

team.games= [
    { opponent: "Canada", teamPoints: 75, opponentPoints: 54 },
    { opponent: "Nigeria", teamPoints: 75, opponentPoints: 54 },
    { opponent: "Australia", teamPoints: 72, opponentPoints: 79 },
    { opponent: "Germany", teamPoints: 84, opponentPoints: 71 },
    { opponent: "Belgium", teamPoints: 81, opponentPoints: 75 },
    { opponent: "USA", teamPoints: 66, opponentPoints: 67 }
] 

// 5. Ajouter une fonction add player et add games
team.addPlayer= function(firstName, lastName, age) {
    this.players.push({ firstName: firstName, lastName: lastName, age: age });
}
team.addGame= function(opponent, teamPoints, opponentPoints) {
    this.games.push({ opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints });
};

team.addPlayer("Leila","Lacan",20);
console.log(team.players);

team.addGame("Canada", 68, 72);
console.log(team.games);

// 6. La somme des points de l'équipe
let totalTeamPoints = team.games.reduce(function(sum, game) {
    return sum + game.teamPoints;
}, 0);

console.log("Total points for the team: " + totalTeamPoints);

// 7. La moyenne point équipe adverse
let totalOpponentPoints = team.games.reduce(function(sum, game) {
    return sum + game.opponentPoints;
}, 0);

let averageOpponentPoints = totalOpponentPoints / team.games.length;

console.log("Average points for the opponent: " + averageOpponentPoints);

// 8. Fonction joueuse + agée
let oldestPlayer = team.players.reduce(function(oldest, player) {
    return (player.age > oldest.age) ? player : oldest;
}, team.players[0]);

console.log("Oldest player: " + oldestPlayer.firstName + " " + oldestPlayer.lastName);

// 9. Trier par ordre alphabétique
team.players.sort(function(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    }
    if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
});

console.log("Players sorted alphabetically: ");
console.log(team.players);
