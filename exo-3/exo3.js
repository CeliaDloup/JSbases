// you can write js here
console.log('exo-3');


function getPlayerChoice(playerInput) {
    const lowerCaseInput = playerInput.toLowerCase();
    // Vérifier si l'entrée est valide
    if (lowerCaseInput === 'rock' || lowerCaseInput === 'paper' || lowerCaseInput === 'scissors' || lowerCaseInput === 'bomb') {
        return lowerCaseInput;
    } else {
        console.error("Invalid choice. Please select 'rock', 'paper', or 'scissors'.");
    } }

function getComputerChoice() {
     const randomNumber = Math.floor(Math.random() * 3); // Génère 0, 1 ou 2
     if (randomNumber === 0) {
        return 'rock';
        } else if (randomNumber === 1) {
            return 'paper';
      } else {
            return 'scissors';
        }
    }

    function findWinner(playerChoice, computerChoice) {
        // Cas où le joueur utilise le cheat code
        if (playerChoice === 'bomb') {
            return 'Won';
        }
        // Cas d'égalité
        if (playerChoice === computerChoice) {
            return 'Tied';
        }
        // Cas où l'utilisateur choisit 'rock'
        if (playerChoice === 'rock') {
            return computerChoice === 'scissors' ? 'Won' : 'Lost';
        }
        // Cas où l'utilisateur choisit 'paper'
        if (playerChoice === 'paper') {
            return computerChoice === 'rock' ? 'Won' : 'Lost';
        }
        // Cas où l'utilisateur choisit 'scissors'
        if (playerChoice === 'scissors') {
            return computerChoice === 'paper' ? 'Won' : 'Lost';
        }
    }
    
    function playGame() {
        // Récupérer le choix de l'utilisateur
        const uChoice = getPlayerChoice(prompt("Your choice (rock, paper, scissors)?"));
        if (!uChoice) return; // Arrêter si l'utilisateur a fait un mauvais choix
        
        // Récupérer le choix de l'ordinateur
        const computerChoice = getComputerChoice();
        
        // Afficher les choix
        console.log(`You chose: ${uChoice}`);
        console.log(`The computer chose: ${computerChoice}`);
        
        // Déterminer le gagnant
        const result = findWinner(uChoice, computerChoice);
        console.log(`Result: ${result}`);
    }
    
    // Lancer le jeu
    playGame();