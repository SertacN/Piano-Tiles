
document.querySelectorAll(".piano").forEach(function (key){
    key.addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
})

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(button){
    switch (button) {
        case "a":
            let doSound = new Audio("sounds/do.mp3");
            doSound.play();
            break;
        case "s":
            let reSound = new Audio("sounds/re.mp3");
            reSound.play();
            break;
        case "d":
            let miSound = new Audio("sounds/mi.mp3");
            miSound.play();
            break;
        case "f":
            let faSound = new Audio("sounds/fa.mp3");
            faSound.play();
            break;
        case "j":
            let solSound = new Audio("sounds/sol.mp3");
            solSound.play();
            break;
        case "k":
            let laSound = new Audio("sounds/la.mp3");
            laSound.play();
            break;
        case "l":
            let siSound = new Audio("sounds/si.mp3");
            siSound.play();
            break;
        
        default:
            console.log("Wrong Key");
            break;
    }
}

function buttonAnimation(currentKey){
   let activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}

