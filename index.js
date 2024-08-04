const increase = document.getElementById("inc");
const decrease = document.getElementById("dec");
const reset = document.getElementById("reset");
const label = document.getElementById("myLabel");
let count =0;

increase.onclick = function(){
    count++;
    label.textContent=count;
}
decrease.onclick= function(){
    count--;
    label.textContent=count;
}
reset.onclick= function(){
    count = 0;
    label.textContent = count;
}



function rollTheDice(){
 const number = document.getElementById("number1").value;
const result = document.getElementById("diceResult");
const images = document.getElementById("diceImages");
const values = [];
const diceImages=[];
    for (let i = 0; i <number; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        diceImages.push(`<img src="counterImages/${value}.png" alt="Dice ${value}">`);
        
    }
    result.textContent=`DICE: ${values.join("-")}`;
    images.innerHTML = diceImages.join("");
}

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,`0`);
    const um = hours>=12 ? `AM` : `PM` ;
    const mins = now.getMinutes().toString().padStart(2,`0`);
    const secs = now.getSeconds().toString().padStart(2,`0`);
    const timeString = `${hours}:${mins}:${secs} ${ um}`;
    document.getElementById("text").textContent = timeString
}
updateClock();
setInterval(updateClock, 1000);

const displayNumbers = document.getElementById("display");
function appendText(input){
    displayNumbers.value += input;

}
function calculate(){
    try {
        displayNumbers.value = eval(displayNumbers.value)
        
    } catch (error) {
        displayNumbers.value = "error";
        
    }

}
function clearDisplay(){
    displayNumbers.value ="";

}
const dabba = document.getElementById("myBox");
const baat = document.getElementById("imgi");
const imgRef = document.getElementById("flirty");
const hoverSrc1 = 'counterImages/angy.jpg';
const hoverSrc2 = 'counterImages/sad.jpg';
const original = 'counterImages/flirt.jpg';
const movement = 100;
let x = 0;
let y=0;

dabba.addEventListener('mouseover', event => {
    imgRef.src = hoverSrc1;
    baat.textContent = 'oye door reh mjse, hath na la mainu';
});

dabba.addEventListener('click', event => {
    imgRef.src = hoverSrc2; // Change to hoverSrc2 if you want different behavior on click
    baat.textContent = 'sorry bhai mazak tha';
});

dabba.addEventListener('mouseout', event => {
    imgRef.src = original;
    baat.textContent = 'kiddan srkr';
});


document.addEventListener('keydown', event =>{
    if( event.key.startsWith('Arrow')){
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x +=movement;
                break;
        }
        dabba.style.left =`${x}px`;
        dabba.style.top =`${y}px`;

    }
})


