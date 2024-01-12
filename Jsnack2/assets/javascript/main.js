/*genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale*/


const generaNumeroHtml = document.getElementById("generaNumero");
const buttonHtml = document.getElementById("button");
const buttonIndovinaHtml = document.getElementById("buttonIndovina");
const testNumeroHtml = document.getElementById("testNumero");
const risultatoHtml = document.getElementById("risultato");


let numeroCasuale;
buttonHtml.addEventListener( "click", function(){
    numeroCasuale = RandomNumber( 0, 100)
    console.log(numeroCasuale)
})

buttonIndovinaHtml.addEventListener( "click", function(){
    if(numeroCasuale == testNumeroHtml.value){
        risultatoHtml.innerHTML = "Hai indovinato!!!"
    }else if(numeroCasuale > testNumeroHtml.value){
        risultatoHtml.innerHTML = "Il numero da indovinare è più grande, riprova!"
    }else if(numeroCasuale < testNumeroHtml.value){
        risultatoHtml.innerHTML = "Il numero da indovinare è più piccolo, riprova!"
    }
})

function RandomNumber (min, max){
    return Math.floor( Math.random()*(max - min + 1) + min)
}