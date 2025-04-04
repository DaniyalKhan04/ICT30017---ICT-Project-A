
function validate() {
	var phonenumber = document.getElementById("phonenumber").value;
	var emailaddress = document.getElementById("emailaddress").value;
	var creditcardnumber = document.getElementById("creditcardnumber").value;
	var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var errormessage = "";
	var result = true;

	if ((delivery == "") && (pickup == "")) 
	{
		errormessage += "Select the type of order. \n";
	}
	if (phonenumber == "") 
	{
		errormessage += "This field cannot be empty. \n";
	}
	if (emailaddress == "") 
	{
		errormessage += "Email Address cannot be empty. \n";
	}
	if ((paypickup == "") && (payonline == "")) 
	{
		errormessage += "Select a Payment Method. \n";
	}
	if ((document.getElementById("VISA").checked) && (creditcardnumber.length != 16)) 
	{
		errormessage += "Enter a 16-digit number. \n";
	}
	if ((document.getElementById("Mastercard").checked) && (creditcardnumber.length != 16)) 
	{
		errormessage += "Enter a 16-digit number. \n";
	}
	if ((document.getElementById("American Express").checked) && (creditcardnumber.length != 15)) 
	{
		errormessage += "Enter a 15-digit number. \n";
	}
	if (errormessage != "") 
	{
		alert(errormessage);
		result = false;
	}
	return result;
}

function init() 
{
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}
window.onload = init;

function addressFunction() 
{
	if (document.getElementById("same").checked) 
	{
		document.getElementById("billingaddress").value = document.getElementById("deliveryaddress").value;
	}
	else {
		document.getElementById("billingaddress").value = "";
	}
}
window.onchange = addressFunction;

function yesnoCheck() {
	if (document.getElementById('delivery').checked) {
		document.getElementById('ifYes').style.visibility = 'visible';
	}
	else document.getElementById('ifYes').style.visibility = 'hidden';
}

function yesCheck() {
	if (document.getElementById('payonline').checked) {
		document.getElementById('ifYess').style.visibility = 'visible';
	}
	else document.getElementById('ifYes').style.visibility = 'hidden';
}

function copy(event) {
	var deliveryaddress = document.getElementById("deliveryaddress");
	var billingaddress = document.getElementById("billingaddress");
	var checked = document.getElementById("same").checked;
	if (checked) {
		if (deliveryaddress.value) {
			billingaddress.value = deliveryaddress.value;
		}
		else {
			alert('Enter Your Delivery Address');
			event.preventDefault();
		}

	}
}

window.onchange = yesnoCheck();
window.onchange = yesCheck();
window.onchange = copy();