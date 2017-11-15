function makeCounterLogger(baseNumber) {
	return function(number) {
		if (number > baseNumber) {
			for (var i = baseNumber; i <= number; i += 1) {
				console.log(i);
			}
		} else {
			for (var i = baseNumber; i >= number; i -= 1) {
				console.log(i);
			}
		}
	}
}

/*
input: no input
output: a function that makes a todo list

defintions:
	- when the output function is called with no arguments:
		- log all the items on the list
	- when the output function is called with an argument that isn't on the list:
		- add the argument to the list
	- whent he output function is called with an argument that is on the list:
		- remove that element from the list

rules:
- define a function with a closure that's an array object
- if the l
*/

function log(list) {
	if (list.length === 0) {
		console.log("The list is empty.")
	} else {
		list.forEach(function(item){
			console.log(item)
		});
	}
}

function makeList() {
	var list = [];
	return function(input) {
		var index;
		if (input === undefined) {
			log(list);
		} else {
			index = list.indexOf(input);
			if (index === -1) {
				list.push(input);
				console.log(input + ' added!');
			} else {
				list.splice(index, 1);
				console.log(input + ' removed!');
			}
		}
	};
}