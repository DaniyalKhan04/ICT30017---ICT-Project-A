function validate() {
	var username = document.getElementById("username").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var postcode = document.getElementById("postcode").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var icecream1 = document.getElementById("icecream1").checked;
	var icecream2 = document.getElementById("icecream2").checked;
	var icecream3 = document.getElementById("icecream3").checked;
	var errormessage = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	if (username == "") {
		errormessage += "Fill the username field. \n";
	}
	if (password1.length < 9) {
		errormessage += "Password must be at least 9 characters.\n";
	}
	if (password2 == "") {
		errormessage += "Re-type Password field cannot be empty.\n";
	}
	if (password1 != password2) {
		errormessage += "Passwords do not match.\n";
	}
	if (email == "") {
		errormessage += "Fill in the Email Address field.\n";
	}
	if (!postcode.match(/^(?=.*\d).{4}$/)) {
		errormessage += "Postcode must be 4-digits.\n";
	}
	if (name == "") {
		errormessage += "Fill in customer's name field.\n";
	}
	if (!name.match(pattern)) {
		errormessage += "Customer's name has symbols.\n";
	}
	if (!male && !female) {
		errormessage += "Select a Gender. \n";
	}
	if (!icecream1 && !icecream2 && !icecream3) {
		errormessage += "Choose a type of ice cream. \n";
	}
	if (errormessage != "") {
		alert(errormessage);
		result = false;
	}
	return result;
}

function init() {
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}

window.onload = init;
