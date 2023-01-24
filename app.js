	

function submit(){
	let username = document.getElementById("Username").value;
	let password = document.getElementById("Password").value;

	// promt error and success

	let success = document.getElementById("success");
	let error = document.getElementById("error");


	let defaultuser = "cebucoder";
	let defaultpass = "cebucoder101";

	if ((username == defaultuser) && (password == defaultpass)) {
		
		success.classList.add("show-success");
		error.classList.remove("show-error");



	}else{
		error.classList.add("show-error");
		success.classList.remove("show-success");
	}

}
