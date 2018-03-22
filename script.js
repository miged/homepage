window.onload = function date() {
	var d = new Date();

	// output date
	document.getElementById("date").innerHTML += moment().format('h:mm A') + "<br>";
	document.getElementById("date").innerHTML += moment().format('dddd, MMM D');

	// change background colour based on time
	var elem = document.getElementById("html");
	if (d.getHours() > 21 || d.getHours() < 7)
		elem.setAttribute("style", "background-color:#BBBBBB;");
	else
		elem.setAttribute("style", "background-color:#EEEEEE;");
}
