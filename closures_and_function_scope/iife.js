/*

1. Will the code below execute?

This code will raise a syntax error because IIFEs require the function to be
wrapped in parentheses or to be a function expression.

function() {
  console.log("Sometimes, syntax isn't intuitive!")
}();

2. Edit the code from problem one such that it executes without error.

*/

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

/*

3. The code below throws an error:

*/

var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

/*

This error highlights the problem of variable naming conflict. Sum already exists in the program 
as a variable and our function attempts to redefine it as a function. Since we haven't invoked the
function yet when we attempt to add it to the sum variable, the JS runtime already recognizes it as
a variable  and not a function, so we get a TypeError

Their explanation:
We intend to invoke the sum function we declared on line 8, but sum in fact references a variable
defined on line 1. SInce this variable references a primitive value, which can't be invoked as a 
function our code throws a type error. we can solve this problem using an IIFE

4. Consider the output below:

countdown(7);
7
6
5
4
3
2
1
0
Done!

Implement a function countdown that uses an IIFE to generate the desired output.

*/

function countdown(count) {
	(function(num) { 
		for (var i = num; i >= 0; i -= 1) {
			console.log(i);
		}
		console.log('Done!');
	})(count);
}

/*

5. Will the named function inside of this IIFE be accessible in the global scope?

IIFEs are not accessible in the global scope; it is created within a private scope and won't
clash with any other functions

Their explanation: No, although the function is named, it isn't visible outside of the scope
created by the IIFE

6. For an extra challenge, refactor the solution to problem 4 using recursion, bearing in mind
that a named function created in an IIFE can be referenced inside of the IIFE.

*/

function recursiveCountdown(count) {
	(function countdown(num) {
		console.log(num);
		
		if (num === 0) {
			console.log('Done');
		} else {
			countdown(num - 1);
		}
	})(count);
}