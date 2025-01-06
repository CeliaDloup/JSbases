// you can write js here
console.log('exo-2');
const myDate = new Date(); 

// messages à afficher
const weekdayMessage = "Pas encore le weekend...";
const weekendMessage = "C'est le weekend !";

//jour de la semaine
const datetoday = myDate.getDay();
// si jour de la semaine ou weekend
if (datetoday >= 1 && datetoday <= 5) {
    console.log(weekdayMessage);
} else {
    console.log(weekendMessage);
}


// heure actuelle
const hour = myDate.getHours();
// si vendredi après 17h
if (datetoday >= 1 && datetoday <= 5) {
    if (datetoday === 5 && hour >= 17) {
        console.log(weekendMessage);
    } else {
        console.log(weekdayMessage);
    }
} else {
    console.log(weekendMessage);

// lundi avant 9h    
if (datetoday >= 1 && datetoday <= 5) {
    if (datetoday === 5 && hour >= 17) {
        console.log(weekendMessage);
    } else if (currentDay === 1 && hour < 9) {
        console.log(weekendMessage);
    } else {
        console.log(weekdayMessage);
    }
} else {
    console.log(weekendMessage);
}


}
const isTesting = true; // Mettre `true` pour activer les tests manuels

let testDay, testHour;

if (isTesting) {
    testDay = parseInt(prompt("Entrez le jour de la semaine (0=dimanche, 1=lundi, etc.):"));
    testHour = parseInt(prompt("Entrez l'heure actuelle (0-23):"));
} else {
    testDay = datetoday;
    testHour = hour;
}
if (testDay >= 1 && testDay <= 5) {
    if (testDay === 5 && testHour >= 17) {
        console.log(weekendMessage);
    } else if (testDay === 1 && testHour < 9) {
        console.log(weekendMessage);
    } else {
        console.log(weekdayMessage);
    }
} else {
    console.log(weekendMessage); }
