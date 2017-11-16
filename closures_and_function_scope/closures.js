/*

Write a function named makeMultipleLister that, when invoked and passed a number, 
returns a function that logs every positive integer multiple of that number less 
than 100. Usage looks like this:

input: a number
output: a function that logs every positive multiple of the number less than 100

definitions:
- return a function that:
	- lists every positive multiple of that number < 100
- invoke the function

rules:
	- argument will be stored as a local variable
	- starting from i = 0:
		- either += i or i % argument

*/

function makeMultipleLister(num) {
	return function() {
		for (var i = num; i < 100; i += num) {
			console.log(i);
		}
	}
}

var lister = makeMultipleLister(13);
lister();

/*
logs
13
26
39
52
65
78
91
*/
/*

2. Write a program that uses two functions, add and subtract, to manipulate a running total value. 
When you invoke either function with a number, it should add or subtract that number to the running
total and log the new total to the console. Usage looks like this:

input: number
output: a total value that either subtract's from total or adds to total

definitions:
	- two functions:
		- add: adds the number to total
		- subtract: subtracts the number from total
	- total global variable
	- don't see anything about a global being declared
	- undeclared values are added to the global scope

rules:
	- if total doesn't exist:
		- total = 0
	- total += 0
	- console.log(total)

	if total doesn't exist:
		- total = 0	
	- total -= 0
	- console.log(total)

	function initializeTotal() {
		if (!total) {
			total = 0
		}
	}
*/

var total = 0;

function add(num) {
	total += num;
	console.log(total);
}

function subtract(num) {
	total -= num;
	console.log(total);
}

/*

3. Write a function named later that takes two arguments: a function and an argument for that
function. The return value should be a new function that calls the input function with the 
provided argument, like this:

> var logWarning = later(console.log, 'The system is shutting down!');
> logWarning()
The system is shutting down!

input: function and argument for the function
output: function that calls the input function with the provided argument

rules:
- return a function:
	- call the function with the argument
	- return the result

*/

function later(func, argument) {
	return function() {
		return func(argument);
	}
}

/*

4. Given the following code:

*/

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

var ready = startup();
var systemStatus = // ?

/*

How can you set the value of systemStatus to the value of the inner variable
status without changing startup in any way?

It's impossible to access the value of status from outside the closure, you would need
to its value into the function returned by startup.

Their explanation: You can't do this. There is not way to access the value from outside
the function. Variables inside closures are available to the closure, never outside it.

This technique lets us define "Private" variables.

*/