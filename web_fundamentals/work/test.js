// /*var arr = [1, 2, 3, 4, 5];

// var array = ["a", "b", "c", "d", "e"];/*copy*/

// //var reversedArray = [];

// //for(var i = array.length - 1; i >= 0; i--) {
//  //   var valueAtIndex = array[i];
//  //   reversedArray.push(valueAtIndex);

// /*
// for ( var i=0; i<(arr.length/2); i++) {
//     if(array[i] == array[arr.length-1]){
//     return true;
// } else{
//     return false;
//     }
// }


// arr.reverse();
// console.log(arr)
// */

// //7/17/2023 Danielle, Austin, Chowdhury and Abel
// // Dice Roller
// // Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

// /*
// function d6() {
//     //var roll = Math.random(); 
//     // your code here
//     roll = Math.ceil(Math.random()*6);


//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

// */

// /*
// //7/17/2023 Danielle, Austin, Chowdhury and Abel
// // Consult the Oracle
// // Using the following array, write a function that will answer all of our questions by randomly choosing a response.
// // the function should take in an array of strings and return a string

// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];

// function getRandomString (array) {
//     var min = 0;
//     var max = array.length-1;

//     var roll = Math.floor(Math.random()* (max-min)+min);

//         console.log(array[roll]);

    

    

// }

// getRandomString(lifesAnswers);
// */

// //07/18/2023

// var pokemon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// /*
// console.log the pokémon objects whose id is evenly divisible by 3
// console.log the pokémon objects that have more than one type
// console.log the names of the pokémon whose only type is "poison"
// console.log the first type of all the pokémon whose second type is "flying"

// */

// //1 console.log the pokémon objects whose id is evenly divisible by 3
// /*
// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id > 3 ===0) {
//         console.log(pokemon[i].id + " " + pokemon[i].name);
//     }
// }
// */

// //2 console.log the pokémon objects that have more than one type

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].type > 1 ) {
//         console.log(pokemon[i].id);
//     }
// }



// 07/21/2023
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dojo Sweeper</title>
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <h2>Dojo Sweeper<h2>
    <div id="the-dojo">still loading... there may be an error</div>
    <script src="game.js"></script>
</body>
</html>
