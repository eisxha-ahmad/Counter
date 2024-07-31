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


