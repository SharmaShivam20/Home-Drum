// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();
for( var t=0; t<7 ; t++ ){
    document.querySelectorAll("button.drum")[t].addEventListener( "click" , function(){
    var buttonOutput = this.innerHTML ;
    makeSound(buttonOutput);
}  );
}


document.addEventListener( "keypress", function(event){
    var buttonOutput = event.key ;
    makeSound(buttonOutput);
    
} );

function makeSound(buttonOutput){
    document.querySelector("." + buttonOutput).classList.add("pressed") ;
    setTimeout(function(){
        document.querySelector("." + buttonOutput).classList.remove("pressed");
    } , 200);
    switch(buttonOutput){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play(); 
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case"d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default: 
        console.log(buttonOutput);
    }

}