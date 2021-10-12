const form = document.getElementById('form');
const country = document.getElementById('country');
const zip = document.getElementById('zip')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	e.preventDefault();	
	checkInputs(emailCheck(),countryCheck(),zipCheck(),passwordCheck(),pass2Check());
});



function checkInputs(e,c,z,p,pc) {
    if(e==true && c==true && z==true && p==true && pc==true ){
		alert("high five you submited succesfully")
	}else{
		alert("wtf")
	}
}

const emailCheck = function(){
	if(email.validity.typeMismatch){
		setErrorFor(email, "This is not an email");
	}else{
		if(email.validity.patternMismatch){
			setErrorFor(email, "The email address must be @bigcorp.eu")
		}else{
			setSuccessFor(email);
			let emailGood = true;
			return emailGood;
		}
	}
};
email.addEventListener("input", emailCheck);

const countryCheck = function(){
	if(country.validate){
		setErrorFor(country, "Field required");
	}else{
		setSuccessFor(country);
		let countryGood = true;
		return countryGood;
	}
};
country.addEventListener("input", countryCheck); 

const zipCheck = function(){
	zip.value= zip.value.toUpperCase();
	if(zip.validity.patternMismatch){
		setErrorFor(zip, "The zip code must be in the format 'AA1 AA'");
	}else{
		setSuccessFor(zip)
		let zipGood = true;
		return zipGood;
	}
};
zip.addEventListener("input", zipCheck);

const passwordCheck = function(){
	if(password.validity.tooShort){
		setErrorFor(password, "Must contain 8 characters");
	}else if(password.validity.patternMismatch){
		setErrorFor(password, "Must have some shit");
	}else{
		setSuccessFor(password);
		let passwordGood = true;
		return passwordGood;
	}
};
password.addEventListener("input", passwordCheck);

const pass2Check= function(){
	if(password2.value!==password.value){
		setErrorFor(password2, "Must be the same asshole");
	}else{
		setSuccessFor(password2);
		let checkGood = true;
		return checkGood;
	}
};
password2.addEventListener("input", pass2Check);

// this 2 functions are responsable for showing/hiding the error message
const setErrorFor = function(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// those 2 functions are to revel/hide password inputs
function Toggle() {
	let temp = document.getElementById("password");
	if (temp.type === "password") {
		temp.type = "text";
	}
	else {
		temp.type = "password";
	}
}

function Toggle2() {
	let temp = document.getElementById("password2");
	if (temp.type === "password") {
		temp.type = "text";
	}
	else {
		temp.type = "password";
	}
}