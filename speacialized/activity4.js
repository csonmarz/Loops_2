var maxSoFar
var currValue
var numValues
var i

maxSoFar = 0
numValues = window.prompt("4,-1")
//Loop variable initialization
i = 0

//Loop expression
while (i < numValues){
   
   currValue = window.prompt("9,0,3")
   //First iteration
   if (i == 0)
      maxSoFar = currValue
   elseif (currValue > maxSoFar)
      maxSoFar = currValue
      //Loop variable update 
   i = i + 1
}
console.log(" Max:")
console.log(maxSoFar)
