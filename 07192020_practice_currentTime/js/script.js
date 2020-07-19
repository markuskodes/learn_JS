function updateClock() {
	var now = new Date();
	var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep',
				'Oct', 'Nov', 'Dec'];

	date = [now.getDate(),
			months[now.getMonth()],
			now.getFullYear()].join(' ');

	// set the content of the element with the ID time to the formatted string
	document.getElementById('time').innerHTML = [date, time].join(' / ');

	// update every 1 second
	setTimeout(updateClock, 1000)
}

updateClock();