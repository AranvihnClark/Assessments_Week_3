console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form has been submitted successfully!`);
	// console.log('form submit');
}

let form = document.querySelector('#contact');
let duck = document.querySelector(`img`);



const duckAlert = ()  => {
	alert(`Well done smart user! You found an alert!`);
}
if (form) {
	form.addEventListener('submit', handleSubmit, false);
  }

duck.addEventListener(`mouseover`, duckAlert);

