let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

else if(randomNumber == 2){
    computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);

else if(randomNumber ==3){
    computerMove = 'nożyce';
}

printMessage(' Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);


else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput =='3'){
    playerMove = 'nożyce';
}

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');
}

if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'papier' && playerMove =='nożyce'){
    printMessage('Wygrywasz');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz');
  }
else if( computerMove =='nożyce' && playerMove == 'kamień') {
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