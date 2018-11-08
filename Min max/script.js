const array = [1,14,15,-31,5,6,129,9,-21,55];
let arrayLength = array.length;
let min;
let max;
 
const showMaxMinNumber = () =>{
    max = Math.max(...array); 
    min = Math.min(...array); 
    console.log(`Największa liczba to : ${max}`);
    console.log(`Najmniejsza liczba to : ${min}`); 
}
 
showMaxMinNumber();

function showMaxNumber2(){
  max = array[0];
  min = array[0];
  for (let i = 0; i < arrayLength; i++){
     if (array[i] < min){
       min = array[i] ;
     } else if (array[i] > max) {
       max = array[i];
     }
  } 
  console.log(`Największa liczba to : ${max}`);
  console.log(`Najmniejsza liczba to : ${min}`); 
 
}
 
showMaxNumber2();






