var shift = false;
document.addEventListener("keydown", function(e) {
	if (e.keyCode == 76) {
		if (shift) {
			shift = false;
			var freq = prompt("Enter frequency:");
			if (freq.length < 5) {
				return;
			}
			document.getElementsByClassName("geofs-location-list")[0].innerHTML = document.getElementsByClassName("geofs-location-list")[0].innerHTML + '<iframe id="chatIframe", width="1000", height="1500", left=350,top=50, src="https://chat.hyperjs.ml/GeoFS"</iframe>';
			document.getElementById("chatIframe").src = "https://chat.hyperjs.ml/" + freq
		}
	}
	if (e.keyCode == 17 || e.keyCode == 87) {
		shift = true;
	}
}, false);
