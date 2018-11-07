  
setInterval(function(){
  let displayDate = document.querySelector(".showDate");

  let currentDate = new Date();
  
  let days = ["Suday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let timeText = 
    displayDate.innerHTML = `Hello! Today is   
    ${days[currentDate.getDay()]}
    ${currentDate.getDate()} / 
    ${currentDate.getMonth()+1} /
    ${currentDate.getFullYear()} | Time  
    ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}, 1000);
















