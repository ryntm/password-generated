let num = ["0","1","2","3","4","5","6","7","8","9"];
let special = ["!","@","#","$","%","^","&","*","(",")"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let allChar = ["1","2","3","4","5","6","7","8","9","0",
"!","@","#","$","%","^","&","*","(",")",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let userNum = "";

let password = "";

document.getElementById("genPass").addEventListener('click', function() {
    password = "";
    userNum = prompt("Enter a number between 8 and 128 for your password length");
    password += num[Math.floor(Math.random() * (num.length -1))];
    password += special[Math.floor(Math.random() * (special.length -1))];
    password += lower[Math.floor(Math.random() * (lower.length - 1))];
    password += upper[Math.floor(Math.random() * (upper.length - 1))];
    console.log(password);
    
    document.getElementById("showpassword").value = "";
    for (var i = 4; i < userNum; i++) {
        if (userNum < 8 || userNum > 128) {
            alert("Your password needs to be between 8-128 caracters long.");
            userNum = prompt("Enter a number between 8 and 128 for your password length");
        } else {
            password += allChar[Math.floor(Math.random() * (allChar.length - 1))];
            document.getElementById("showpassword").value = password;
        };
        
    } ;
    console.log(password);
    
});






document.getElementById("copyPass").addEventListener('click', function() {
    document.getElementById("showpassword").select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard.");

});

