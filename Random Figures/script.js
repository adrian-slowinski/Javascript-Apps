let circle;
let randomFigures = document.querySelector(".randomFigures");
let btn = document.querySelector("button");
 
// Generate random number
function rndNumber(number) {
  return Math.floor(Math.random() * number); 
}

function drawCircle(){  
    let checkCircleNumber = document.querySelectorAll(".circle");
    // console.log(`Liczba kołek wynosi: ${checkCircleNumber.length}`);
 
      for (let i = 0; i < 100; i++) {
        circle = document.createElement("div");
        circle.classList.add("circle", "circle" + i);
        randomFigures.appendChild(circle);

        let rndWidthHeight = `${rndNumber(100)}px`;
        circle.style.width = rndWidthHeight;
        circle.style.height = rndWidthHeight;

        circle.style.backgroundColor = `rgb(${rndNumber(255)},${rndNumber(255)},${rndNumber(255)})`;

        circle.style.top = `${rndNumber(100)}%`;
        circle.style.left = `${rndNumber(100)}%`;
      } 
       
    } 
    

btn.addEventListener("click", drawCircle); 









