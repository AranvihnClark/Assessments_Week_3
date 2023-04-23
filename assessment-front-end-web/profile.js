let typingSound = new Audio(`./sounds/keyboard.wav`);
let gamingSound = new Audio(`./sounds/hadouken.wav`);
let goalsSound = new Audio(`./sounds/driving.wav`);

let typingPic = document.getElementById(`typing-pic`);
let gamingPic = document.getElementById(`gaming-pic`);
let goalsPic = document.getElementById(`goals-pic`);

let colorBtn = document.querySelector(`#color`)
let placeBtn = document.querySelector(`#place`)
let ritualBtn = document.querySelector(`#ritual`)

const typingEffect = ()=> {
	typingSound.play();
}

const gamingEffect = () => {
	gamingSound.play();
}

const goalsEffect = () => {
	goalsSound.play();
}

const colorAlert = () => {
    alert(`My favorite color is blue.`);
}

const placeAlert = () => {
    alert(`My favorite place is under my blanket.`);
}

const ritualAlert = () => {
    alert(`Why would I have a favorite ritual...?`);
}

typingPic.addEventListener(`mouseover`, typingEffect);
gamingPic.addEventListener(`mouseover`, gamingEffect);
goalsPic.addEventListener(`mouseover`, goalsEffect);

colorBtn.addEventListener(`click`, colorAlert);
placeBtn.addEventListener(`click`, placeAlert);
ritualBtn.addEventListener(`click`, ritualAlert);