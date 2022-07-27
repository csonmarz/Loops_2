function FindLCM(aVal, bVal){
return IcmVal 
}
   IcmVal = AbsoluteValue(aVal * bVal)/ GCD(aVal,bVal)


function GCD( aVal, bVal){
return gcdVal
}
   var numA
   var numB
   var godVal
  
   numA = aVal
   numB = bVal
   //Euclid's algorithim
   while (numA!= numB){
      if (numB>numA){
         numB = numB - numA
      }else 
         numA = numA - numB
    }
   
   godVal = numA

      

function Main(){
return nothing 
}
   var usrNumA
   var usrNumB
   var IcmResult
   
   usrNumA = window.propmt("")
   usrNumB = window.propmt("")
   IcmResult = FindLCM(usrNumA, usrNumB)
   console.log(" Least common multiple of")
   console.log(usrNumA)
   console.log(" and ")
   console.log(usrNumB)
   console.log("is")
   console.log(IcmResult)