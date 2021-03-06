  {
  function playGame(playerInput) {
    clearMessages ();  
  
    console.log('Gracz wpisał: ' + playerInput);  
  
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  
  console.log('Wylosowana liczba to: ' + randomNumber);
  
  const computerMove = getMoveName(randomNumber);

  const playerMove = getMoveName(playerInput);

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
  
  if ( argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Przegrywasz');
  }
}
  
  displayResult(computerMove, playerMove); 
}
  
  const rock = document.getElementById('play-rock');
  rock.addEventListener('click', function() {
    playGame(1);
  });
   

  const paper = document.getElementById('play-paper');
  paper.addEventListener('click', function() {
    playGame(2);
  });

  const scissors = document.getElementById('play-scissors');
  scissors.addEventListener('click', function() {
    playGame(3);
  });
}
  