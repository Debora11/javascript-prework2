  function playGame(playerInput) {
  
    console.log('Gracz wpisał: ' + playerInput);  
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  
  console.log('Wylosowana liczba to: ' + randomNumber);
  
  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';

    } else if (argMoveId == 2) {
      return 'papier';

    } else if (argMoveId == 3) {
      return 'nożyce';

    } else { printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  /*
  if (randomNumber == 1) {
    computerMove = 'kamień';
  }
  
  else if (randomNumber == 2) {
      computerMove = 'papier';
  }
  
  else if (randomNumber == 3) {
      computerMove = 'nożyce';
  }
  
  printMessage('Mój ruch to: ' + computerMove);
  
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  
  console.log('Gracz wpisał: ' + playerInput);
  */
  let playerMove = getMoveName(randomNumber);
  /*
  if (playerInput == '1') {
    playerMove = 'kamień';
  }
  
  else if (playerInput == '2') {
      playerMove = 'papier';
  }
    
  else if (playerInput == '3') {
      playerMove = 'nożyce';
  }
    
  printMessage('Twój ruch to: ' + playerMove);
  */
  
  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
  console.log('moves:', argComputerMove, argPlayerMove);
  
  if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else{
      printMessage('Tym razem przegrywasz');
  }
  
  if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else{
      printMessage('Tym razem przegrywasz');
  }
  
  if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    } else{
      printMessage('Tym razem przegrywasz');
  }
  
  if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis!');
  } 
  
  if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis!');
  }
  if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ) {
      printMessage('Remis!');
  }
}
  
  displayResult(argComputerMove, argPlayerMove);
  
}
  playGame(3);

  function buttonClicked() {
    printMessage('Kamień');
  }
  
  let testButton = document.getElementById('play-rock');

  play-rock.addEventListener('click', buttonClicked);

  function buttonClicked() {
    printMessage('Papier');
  }
  
  let testButton = document.getElementById('play-paper');


  play-paper.addEventListener('click', buttonClicked);

  function buttonClicked() {
    printMessage('Nożyce');
  }
  
  let testButton = document.getElementById('play-scissors');

  play-scissors.addEventListener('click', buttonClicked);

  
  