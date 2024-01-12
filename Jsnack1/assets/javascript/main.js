/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50*/

let age;
let numbers = [];

let sum = 0;

while(sum < 50){
    age = prompt('Scrivi un numero');
    let ageInt = parseInt(age)
    if(sum + ageInt > 50){
        alert('La somma degli elementi è maggiore a 50.');
    }else if(sum + ageInt == 50){
        alert('La somma degli elementi è uguale a 50.');
    }else{
        numbers.push(ageInt);
        sum += ageInt;
    }
    console.log(age, numbers, sum)
}


