var shift = false;
let newPanel = document.createElement("div");
var panelHTML = '<div id="MainDIV"><p id="DIVtitle">Chat</p></div>'
newPanel.innerHTML = panelHTML
let sidePanel = document.getElementsByClassName("geofs-ui-left")[0]
document.getElementsByClassName("geofs-ui-left")[0].appendChild(newPanel)
let buttonDiv = document.createElement("div");
buttonDiv.innerHTML = '<button class="mdl-button mdl-js-button geofs-f-standard-ui geofs-mediumScreenOnly" data-toggle-panel=".geofs-autoland-list" data-tooltip-classname="mdl-tooltip--top" id="ilsbutton" tabindex="0" data-upgraded=",MaterialButton">ATC Chat</button>'
document.body.appendChild(buttonDiv);
document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(buttonDiv);
let element = document.getElementById("ilsbutton");
document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(element, buttonDiv);
document.addEventListener("keydown", function(e) {
	if (e.keyCode == 76) {
		if (shift) {
			shift = false;
			var freq = prompt("Enter frequency:");
			newPanel.innerHTML = panelHTML
			if (freq.length < 5) {
				return;
			}
			setTimeout(() => {
			newPanel.innerHTML = newPanel.innerHTML + '<iframe id="chatIframe", width="1000", height="1500", left=350,top=50, src="https://chat.hyperjs.ml/GeoFS"</iframe>';
			document.getElementById("chatIframe").src = "https://chat.hyperjs.ml/" + freq
			},100)
		}
	}
	if (e.keyCode == 16 || e.keyCode == 13) {
		shift = true;
	}
}, false);
