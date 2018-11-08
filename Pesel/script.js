let pesel = prompt("Please enter your ID number");
let peselLength = pesel.length; 

function validatePesel(){ 
  let total = pesel[0] * 1  + pesel[1] * 3 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
  total = total % 10;
  total = 10 - total;
  total = total % 10; 

  if (pesel[pesel.length - 1] == total){
    console.log(`Numer pesel (${pesel}) jest poprawny!`);
  } else {
    console.log(`Numer pesel (${pesel}) jest niepoprawny!`);
  } 
} 

validatePesel();









