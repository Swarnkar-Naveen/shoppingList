var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function listItemAction(e){
	//console.log(e.target.nodeName);
	//for strike off and out
	if (e.target.nodeName==="LI") {
		e.target.classList.toggle("done");
	}
	//delete item
	if (e.target.nodeName==="BUTTON") {
		e.target.parentElement.remove()
	}
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	btn.appendChild(document.createElement(input.value));
	li.appendChild(btn);
	li.appendChild(document.createTextNode(" "+input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",listItemAction);
