/*

1. Implement sub5 below such that the invocation on the last line returns 5.

*/

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5)
}

sub5(10); //

/*

2. This code is a bit limited however, because we can only subtract by 5. 
Implement the makeSubN function below so that we can supply any value we want
to be subtracted from a, and get a new function that will always subtract 
this value.

*/

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
	return function(a) {
		return subtract(a, n);
	}
}

var sub5 = makeSubN(5);
sub5(10); // 5

/*

3. Although the solution above is more flexible, we now want to be able to
supply any operation, not just subtraction. Implement makeParticalFunc below.

*/

function makePartialFunc(func, b) {
  return function(a) {
  	return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

multiplyBy5(100); // 500

/*

4. In our previous solution, multiplyBy5 retains access to func and b long
after makePartialFunc has finished execution. What makes this possible?

a closure associated with the returned function in makePartialFunc allows us
to retain access to func and b after it has finished execution. This allwos us
to define private data that persists for the function's lifetime.

Their answer: This behavior is made possible by closures. When a new function is
created, it retains access to all of the references visible to it at the moment and
in the lexical location of its creation.

5. Consider the code below:

*/

var subjects = {
  "English": ["Bob", "Tyrone", "Lizzy"],
  "Math": ["Fatima", "Gary", "Susan"],
  "Biology": ["Jack", "Sarah", "Tanya"]
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
  	rollCall("Math", students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects["Math"]);
// Math:
// Fatima
// Gary
// Susan

/*

Implement makeMathRollCall such that it returns a partially applied rollCall function, 
with the subject as "Math".

*/