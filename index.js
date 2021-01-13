

var rs = require("readline-sync");

console.log("Hello, Welcome to the Quiz!");

var player = rs.question("Please enter your username : ");
var welcomemsg = `Welcome ${player}`;

console.log(welcomemsg);



var answer = rs.question("Where do i study?");

if (answer === "IIITD"){
  console.log("True answer")
}  