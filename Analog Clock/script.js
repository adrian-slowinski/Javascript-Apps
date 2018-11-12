 
setInterval(function(){
 
  let hour = document.querySelector(".clock__hour");
  let minute = document.querySelector(".clock__minute");
  let second = document.querySelector(".clock__second");
  let second1 = document.querySelector(".clock__second--1");
  let second2 = document.querySelector(".clock__second--2");
  let second3 = document.querySelector(".clock__second--3");

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
 













