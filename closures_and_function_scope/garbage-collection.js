/*

1. Is JavaScript a garbage-collected language, and if so, what does this entail?

JavaScript is a garbage collected language. Memory is automatically allocated by
the JavaScript runtime and released when values or objects are no longer referenced
by the program.

2. Consider the code below:

*/

var myNum = 1;

function foo() {
  var myStr = "A string";
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code

/*

Are either of the values 1 or "A string" eligible for garbage collection 
on line 5? What about on line 10?

'A string' is eligible for garbage collection on line 10 because it is no
longer referenced after foo() returns. Since more code is implied, it is 
safe to assume that `1` will have a reference at least until line 10 and
will therefore not be eligible for garbage collection.

3. In the code below, is the value referenced by outerFoo eligible for 
garbage collection on line 10?

The value referenced by outerFoo on line 10 is not eligible for garbage collection
because it has been assigned to the global variable `outerFoo`. `outerFoo`s scope
will persist until the program finishes execution which is presumably after line 10.

*/

var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here?

// more code

/*

Consider the code below:

*/

function makeEvenCounter() {
  var index = 0;
  return function() {
    return index += 2;
  }
}

var evenCounter = makeEvenCounter();

// is 0 eligible for GC here?

// more code

/*

Is 0 eligible for garbage collection on line 10?

`0` is not eligible for garbage collection on line because it's contained in the closure
for the function returned by makeEvenCounter and a reference for it is maintained in 
var evenCounter.

5.Consider the script below:

*/

var bash = "Some val";

/*

Will the value "Some val" ever be eligible for garbage collection?

"Some val" will be eligible for garbage collection when the program finishes running

*/




