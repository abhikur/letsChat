function navigateToApp(event, inputName) {
	if (event.keyCode) hideErrorDialog();
	if (event.keyCode == 13 && nameVerified(inputName.value)) {
		saveUserName(inputName.value);
		window.location = "./index.html";
	}
}

function nameVerified(text) {
	if (text.length <= 0) {
		showErrorDialog();
	} 
	else return true
}

function saveUserName(name) {
	
}

function hideErrorDialog() {
	$('.errorDialogVisible').attr('class', 'errorDialogHidden');
}

function showErrorDialog() {
	$('.errorDialogHidden').attr('class', 'errorDialogVisible');
}