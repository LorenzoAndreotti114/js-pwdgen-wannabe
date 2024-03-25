//INPUT NOME
const uName = prompt("Ciao, facciamo un gioco. Dimmi il tuo nome"); //STRING

console.log(uName, typeof uName); //CONSOLE

//INPUT COGNOME
const sName = prompt(`Ora dimmi il tuo cognome`); //STRING

console.log(sName, typeof sName); //CONSOLE

//INPUT COGNOME
const uColor = prompt(`Adesso come ultima cosa, ho bisogno di sapere il tuo colore preferito`); //STRING

console.log(uColor, typeof uColor); //CONSOLE

//GENERATORE NUMERI
let numberGen = randomNum(0, 99); //NUMBER

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

console.log(numberGen, typeof numberGen); //CONSOLE

//GENERATORE PASSWORD
let passwordGen = `${uName}${sName}${uColor}${numberGen}`; //STRING

document.getElementById("password").innerHTML = passwordGen;