window.onload = function date() {
	var d = new Date();

	// assign month
	var monthA = new Array("January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December");
	var month = monthA[d.getMonth()];

	// assign day of the week
	var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday");
	var day = weekday[d.getDay()];

	// convert hours
	var hours = d.getHours();
	var m = "AM";

	if (hours > 12) {
	    hours -= 12;
	    m = "PM"
	} else if (hours === 0) {
	   hours = 12;
	}

	// convert minutes
	var minutes = d.getMinutes();
	if (minutes < 10)
		minutes = "0" + d.getMinutes();

	var x = document.getElementById("date");
	x.innerHTML = hours + ":" + minutes + " " + m + "<br>";
	x.innerHTML += day + ", " + month + " " + d.getDate();

	// change background colour based on time
	var elem = document.getElementById("html");
	if (d.getHours() > 21 && d.getHours() < 7)
		elem.setAttribute("style", "background-color: #BBBBBB;");
	else
		elem.setAttribute("style", "background-color: #EEEEEE;");
}