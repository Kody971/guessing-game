const readline = require("node:readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let secretNumber = 0;

function checkGuess(num) {
	if (num > secretNumber) {
		console.log("Too high");
		return false;
	} else if (num < secretNumber) {
		console.log("Too low");
		return false;
	} else {
		console.log("Correct!");
		return true;
	}
}

function askGuess() {
	rl.question("Enter a guess: ", (answer) => {
		const checker = checkGuess(answer);
		if (checker) {
			console.log("You win!");
			rl.close();
		} else {
			askGuess();
		}
	});
}

function randomInRange(min, max) {
	return Math.floor(
		Math.random() * (Number(max) - Number(min) + 1) + Number(min)
	);
}

function askRange() {
	const minNumber = (min) => {
		rl.question("Enter a max number: ", (max) => {
			secretNumber = randomInRange(min, max);
			askGuess();
		});
	};
	rl.question("Enter a min number: ", minNumber);
}

askRange();
