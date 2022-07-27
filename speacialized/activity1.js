var userNum
var curPower

curPower = 2
userNum = window.prompt("1")

while (userNum == 1){
   console.log(curPower)
   console.log("\n")
   curPower = curPower * 2
   userNum = window.prompt("1,0")
}
   
console.log("Done.")