let buttons = document.querySelectorAll("button");
// console.log(buttons);

// Add Event  Listener to Buttons
for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        buttonAnimation(this.innerHTML);
        playSound(this.innerHTML)
    });
}

// Add Event Listener for KeyBoard
document.addEventListener("keypress", function (event){
    buttonAnimation(event.key);
    playSound(event.key); 
});


function playSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    document.querySelector(`.${currentKey}`).classList.add("pressed");
    
    setTimeout(function (){
        document.querySelector(`.${currentKey}`).classList.toggle("pressed");
    }, 100);
}

