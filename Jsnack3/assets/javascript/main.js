/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro*/


let videogiochiArray1 = ["The Legend of Zelda", "Super Mario Bros", "Fortnite", "Minecraft"];


let videogiochiArray2 = ["Call of Duty", "Assassin's Creed", "Overwatch", "Final Fantasy", "League of Legends", "FIFA", "Battlefield", "Battlefield"];

console.log("Array 1:", videogiochiArray1);
console.log("Array 2:", videogiochiArray2);

if(videogiochiArray1.length !== videogiochiArray2.length){
    for(let i = 0; i < 4; i++){
    
        if(videogiochiArray1.length > videogiochiArray2.length){
            videogiochiArray2.push("new game")
        }else{
            videogiochiArray1.push("new game")
        }
    }
}
console.log("Risultato Array 1:", videogiochiArray1);
console.log("Risultato Array 2:", videogiochiArray2);

    
    