// you can write js here

console.log('exo-4');

var secretMessage = [
    "Learning", "isn't", "about", "what", "you",
    "get", "easily", "the", "first", "time,",
    "it's", "about", "what", "you",
    "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"
  ];
  
  // 1. Supprimer le dernier élément
  secretMessage.pop();
  console.log(secretMessage);
  
  // 2. Ajouter "to" et "program" à la fin du tableau
  secretMessage.push('to', 'program');
  console.log(secretMessage);
  
  // 3. Remplacer "easily" par "right"
  secretMessage[6] = 'right';
  console.log(secretMessage);
  
  // 4. Trouver l'index du mot "get"
  const startIndex = secretMessage.indexOf("get");
  if (startIndex !== -1) {
    // 5. Remplacer "get", "right", "the", "first", "time," par "know"
    secretMessage.splice(startIndex, 5, "know");
    console.log(secretMessage);

    const secretMessageString = secretMessage.join(' ');
console.log(secretMessageString);


  }

 