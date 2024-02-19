function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    // console.log(alphabets);
    const randomNumber = Math.random()*25;
    const round = Math.round(randomNumber);
    // console.log(round);
    const alphabet = alphabets[round];
    // console.log(alphabet);
    return alphabet;

}

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log("Your random alphabet is:", alphabet);
    const presentAlphabet = document.getElementById("randomAlphabet");
    presentAlphabet.innerText = alphabet.toUpperCase();

    addBackgroundColorById(alphabet);
}

function play(){
    // console.log("Start now");

    const homeSection = document.getElementById("home");
    // console.log(homeSection);
    // console.log(homeSection.classList);
    homeSection.classList.add("hidden");

    const playGroundSection = document.getElementById("playGround");
    playGroundSection.classList.remove("hidden");

    // Starting the game
    continueGame();
}