/*

1. What function can we use to permanently bind a function to a particular 
execution context?

Function.prototype.bind(obj) can be used to permanently bind a function 
to a particular execution context.

2. What will the code below log to console?

- obj is declared globally
- foo() is declared globally 
	- contains a call to console.log(); though we are only passing `this` into
	console.log.
-  Initially, the `this` inside foo() has an execution context of window, which
wouldn't have a property.message but since we bind foo to obj, the execution context
changes to obj
- However, we aren't storing this new function anywhere and we aren't executing anything,
so nothing will be output to the console

Therefore, this code will log: 
	- nothing

In their words:
bind doesn't invoke the receive function. Rather. it returns a new function that is
permanently bound to the context argument.


*/

var obj = {
  message: "JavaScript"
}

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/*

What will the code below output?

This code will log:
	- console.log(foo()) // 0
		- This happens because its execution context is the global object
	- console.log(bar()) // 5
		- This happens because we permanently bind bar()'s execution context
		to obj which has properites a: 2, and b: 3.

*/

var a = 1;
var b = -1;
var obj = {
  a: 2,
  b: 3
};

function foo() {
  return this.a + this.b;
}

var bar = foo.bind(obj);

console.log(foo());
console.log(bar());

/*

4. What will the code below log to the console?

notes: 
- declare positiveMentality object globally
- declare negativeMentality object globally
- declare foo() globally
- setting bar()'s execution context to foo.bind(positiveMentality)
- positiveMentality will be the execution context if we invoke it as bar()
- assigning negativeMetality a method, logMessage, whose execution context is still
positiveMentality
- Since negativeMentality.logMessage() is always applying positiveMentality as the execution context,
it will log:

"JavaScript makes sense!"

*/

var positiveMentality = {
  message: "JavaScript makes sense!"
};

var negativeMentality = {
  message: "JavaScript makes no sense!"
};

function foo() {
  console.log(this.message);
}

var bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage();

/*

5. What will the code below output?

declare global var obj
declare global var otherObj
declare foo(), which contains an execution context

declare function bar() that is permanently bound to obj
bar.call(otherObj) invokes foo(). foo() is having obj applied to it
each time it's invoked, regardless of the invocation using call.

this code will log:
- Amazebulous!

Their explanation:
Once a fucntion has been bound to an executionc ontext with bind, its context can't
be changed, even explicitly. Inside of bar, this points to obj when bar is invoked
on the last line, rather than otherObj, despite the fact that the function is being invoked
by call with otherObj as the explicit context argument.

*/

var obj = { a: 'Amazebulous!' };
var otherObj = { a: "That's not a real word!" };

function foo() {
  console.log(this.a);
}

var bar = foo.bind(obj);

bar.call(otherObj);
