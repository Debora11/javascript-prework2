let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

else if(randomNumber == 2){
    computerMove = 'papier';
}

else if(randomNumber ==3){
    computerMove = 'nożyce';
}
*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

else if(playerInput == '2'){
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

else if(playerInput =='3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: '+ playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } 
  else{
    printMessage('Przegrywasz');
}

if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else {
    printMessage('Wygrywasz');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz');
  }
else {
    printMessage ('Wygrywasz');
    }   


if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}   
else if( computerMove =='papier' && playerMove == 'papier'){
    printMessage('Remis');
}
else if( computerMove =='nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
}
*/
console.log('moves:', argComputerMove, argPlayerMove);


    displayResult(argComputerMove, argPlayerMove);{
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }

    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      } else {
        printMessage('Tym razem przegrywasz :(');
      }

    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      } else {
        printMessage('Tym razem przegrywasz :(');
      }
}
