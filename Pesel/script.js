let idNumber = prompt("Please enter your ID number");
let idNumberLength = idNumber.length; 

function validatePesel(){ 
  let total = idNumber[0] * 1  + idNumber[1] * 3 + idNumber[2] * 7 + idNumber[3] * 9 + idNumber[4] * 1 + idNumber[5] * 3 + idNumber[6] * 7 + idNumber[7] * 9 + idNumber[8] * 1 + idNumber[9] * 3;
  total = total % 10;
  total = 10 - total;
  total = total % 10; 

  if (idNumber[idNumber.length - 1] == total){
    console.log(`Your id number (${idNumber}) it's ok!`);
  } else {
    console.log(`Your id number  (${idNumber}) it's incorrect!`);
  } 
} 

validatePesel();









