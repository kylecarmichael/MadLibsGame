/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);
  
  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
	// Retrive form values
	let adjective1 = formValue("adjective-1");
	let profession = formValue("profession");
	let adjective2 = formValue("adjective-2");
	let noun = formValue("noun");
	let number = formValue("number");
	let famousPerson = formValue("famous-person");
	let fastFoodPlace = formValue("fast-food-place");
	let verb = formValue("verb");
	
	// Insert form values into madlib
	let madLib = `
		I went in for my appointment with my ${adjective1} ${profession} today. They said I have to update my ${adjective2} ${noun} or else I will owe them ${number} dollars! 
		<br></br>
		That’s all the money I saved up to see ${famousPerson} at the local ${fastFoodPlace}. Now I’ll have to ${verb} to make it there on time.
	`;


	// Output madlib to player.
	document.getElementById("output").innerHTML = madLib;
	addClassToElement("container", "generated");



}
