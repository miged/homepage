window.onload = function date() {
	var d = new Date();

	// assign month
	var month = new Array("January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December");
	month = month[d.getMonth()];

	// assign day
	var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday");
	day = day[d.getDay()];

	// convert hours
	var hours = d.getHours();
	var m = "AM";

	if (hours > 12) {
	    hours -= 12;
	    m = "PM"
	} else if (hours === 0)
		hours = 12;

	// convert minutes
	var minutes = d.getMinutes();
	if (minutes < 10) 
		minutes = "0" + d.getMinutes();

	// output date
	document.getElementById("date").innerHTML += hours + ":" + minutes + " " + m +
	 "<br>" + day + ", " + month + " " + d.getDate();

	// change background colour based on time
	var elem = document.getElementById("html");
	if (d.getHours() > 21 || d.getHours() < 7)
		elem.setAttribute("style", "background-color:#BBBBBB;");
	else
		elem.setAttribute("style", "background-color:#EEEEEE;");
}
