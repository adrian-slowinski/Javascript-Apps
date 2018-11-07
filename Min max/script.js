const array = [1,14,15,-31,5,6,129,9,-21,55];
let arrayLength = array.length;
let min;
let max;

const showMaxMinNumber = () =>{
 
    var max = Math.max(...array); 
    var min = Math.min(...array); 
    console.log(`Największa liczba to : ${max}`);
    console.log(`Najmniejsza liczba to : ${min}`);

}

 
showMaxMinNumber();









