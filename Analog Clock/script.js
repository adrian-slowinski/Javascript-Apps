 
setInterval(function(){
 
  let hour = document.querySelector(".clock__hour");
  let minute = document.querySelector(".clock__minute");
  let second = document.querySelector(".clock__second"); 

  let currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds() ;  
 
   function addZero(i) {
     if (i < 10) {
       i = "0" + i;
     }
     return i;
   }
 
  hour.innerHTML = addZero(hours);
  minute.innerHTML = addZero(minutes); 
  second.innerHTML = addZero(seconds); 
}, 1000);
 













