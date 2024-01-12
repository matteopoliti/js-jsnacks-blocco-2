/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50*/

let age;
let numbers = [];

let sum = 0;
let i = 0
while(i < 10){

    if(sum < 50){
        age = prompt('Scrivi un numero');
        numbers.push(+age);
        sum += numbers[i];

    }else{
        alert( 'La somma delle età inserite è: ' + sum );
    }
    i++
    console.log(age, numbers)
}
