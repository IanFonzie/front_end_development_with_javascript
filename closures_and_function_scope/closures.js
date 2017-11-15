/*

Write a function named makeMultipleLister that, when invoked and passed a number, 
returns a function that logs every positive integer multiple of that number less 
than 100. Usage looks like this:

input: a number
output: a function that logs every positive multiple of the number less than 100

definitions:
- Need to return a function that will take the argument for the first class function and
see which numbers positive integers between that argument and 100 are multiples

*/

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