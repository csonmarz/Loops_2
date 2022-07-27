var initialSavings 
var interestRate
var currSavings
var i

initialSavings = window.prompt("10000")
interestRate = window.prompt("0.05")
console.log("Annual savings for 10 years \n")
currSavings = initialSavings
//Loop variable initialization 
i = 0

//Loop expression
while (i < 10){
   console.log("$")
   console.log(currSavings)
   console.log("\n")
   currSavings = currSavings + (currSavings + interestRate)
   //Loop variable update 
   i = i + 1
}