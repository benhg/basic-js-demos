// amelia's dog ate my javascript

function postMessage(user){
	var text = document.getElementById(user).value;
	console.log(text);
	var p = document.createElement("p");
	p.innerHTML = "<span class="+user+">"+user+": </span>"+text;

	var history = document.getElementById("output");
	history.appendChild(p);
}
