// window.onload = function() {
// 	document.querySelector("#btn").addEventListener("click", () => {
// 	document.querySelector("#excuse").innerHTML = generateexcuse();
// 	});
// 	console.log();
// }

// let generateexcuse = () => {
	
// 	let who = ["The dog", "My grandma", "His turtle", "My bird"];
// 	let action = ["ate", "peed on", "crushed","broke"];
// 	let what =["my homework", "the keys", "the car"];
// 	let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

// 	let whoIndex = Math.floor(Math.random() * who.length);
// 	let actionIndex = Math.floor(Math.random() * action.length);
// 	let whatIndex = Math.floor(Math.random() * what.length);
// 	let whenIndex = Math.floor(Math.random() * when.length);

// 	return who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
// }

	
	

window.onload = function() {
	document.querySelector("#btn").addEventListener("click", () => {
	document.querySelector("#excuse").innerHTML = generateexcuse();
	});
	console.log();
}

	function generateexcuse() {

		let who = ["The dog", "My grandma", "His turtle", "My bird"];
		let action = ["ate", "peed on", "crushed","broke"];
		let what =["my homework", "the keys", "the car"];
		let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];
		
		let finalExcuse = [ who, action, what, when];
		
		let excuse = "";
		
		for (let i = 0; i < finalExcuse.length; i++) {
		 excuse = excuse.concat(' ', finalExcuse[i][Math.floor((Math.random() * finalExcuse[i].length))]);

		}
		return excuse
		
	}




