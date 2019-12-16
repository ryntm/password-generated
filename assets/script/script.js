let num = ["0","1","2","3","4","5","6","7","8","9"];

let lower = ["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// console.log(lower[Math.floor(Math.random() * 26)]);
let userNum = prompt("How many characters does your password need to be?");

for (var i = 0; i < userNum; i++) {
    
    console.log(lower[Math.floor(Math.random() * 26)]);
} ;

