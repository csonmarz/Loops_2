var currValue
var valuesSum
var  numValues
var i
var averageValue

numValues = window.prompt("4,10,1")
valuesSum = 0
// Loop variable initialization
i = 0

//Loop expression
while (i < numValues){
   currValue = window.prompt("6,3")
   valuesSum = valuesSum + currValue
   //Loop variable update
   i = i + 1
}
   
averageValue = (1.0 * valuesSum)/ numValues
console.log(" Average")
console.log(averageValue)