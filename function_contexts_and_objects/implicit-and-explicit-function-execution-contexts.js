/*

1. What will the code below output?

This code will output window because the implicit execution context at execution is
the global object. This is the case for all functions.

*/

function func() {
  return this;
}

var context = func();

console.log(context);

/*

2. What will the code below output? Explain the difference, 
if any, between this output and that of problem 1.

The code below will output 'o' because the implicit execution context at execution
is the object `o`. o.func() is executed as a method and methods implicit execution 
contexts are always the object that called the method. A method's execution context
is always the object holding the property that references the function.

*/

var o = {
  func: function() {
    return this;
  }
};

var context = o.func();

console.log(context);

/*

3. What will the code below output?

notes:

- var message is declared in the global scope
- deliverMessage is invoked in the global scope and its implicit 
execution context is the window object
- since window has a window.message property this will log:
'Hello from the global scope'
- object foo is declared in the global scope
- deliverMessage is assigned as a property of the foo object
- foo.deliverMessage() is invoked
	- the execution context object at execution is the object foo, since 
	we invoked deliverMessage() as a method.
	- therefore this is equivalent to foo and foo.message will be used
	instead of window.message, logging "Hello from the function scope"

Their words: The implicit function execution context (object) is 
the global object, therefore the global variable message is referenced. The
second log operation is generated by the method call foo.deliverMessage().
implict execution context for a method is its containing object, this resolves
to foo's property message

*/

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

var foo = {
  message: "Hello from the function scope!"
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*

4. What will the code below output?

notes:
- global variables a and b
- global object c with c.a and c.b
- global function add() that uses a execution context object
- add `add()` as a property to c
- add() is invoked, the execution context object is global
	- window.a + b
- c.add() is invoked, the execution context object is c
	- c.a + b

The code below will output:
	- 20
	- 0

*/

var a = 10;
var b = 10;
var c = {
  a: -10,
  b: -10
};
function add() {
  return this.a + b;
}

c.add = add;

console.log(add());
console.log(c.add());

/*

5. The problems above all feature implicit function execution context. 
What methods have we learned so far that allow us to explicitly specify what 
a function's execution context should be?

The methods we learned that allow us to explicitly specify what a function's 
execution context should be are Function.prototype.call and Function.prototype.apply

6. In the code below, use call to invoke add as a method on bar but with foo as execution context. 
What will this return?

This will return 3. We applied foo as the explicit execution context, so its properties
a and b were referenced during execution.

*/

var foo = {
  a: 1,
  b: 2
};

var bar = {
   a: "abc",
   b: "def",
   add: function() {
     return this.a + this.b;
   }
};

bar.add.call(foo) // 3

/*

7. Given the code and desired output below, would it make more sense to use call or apply to 
supply explicit context and arguments to outputList? Implement a solution using one of the 
methods, such that the desired output is logged, and explain your choice.

input: fruitsObj
output: log of the title and each item in the list

definitions: 
	- need to use call or apply on the fruitsObj
	- list is an array
	- apply uses an array to supply arguments to the function

I think it would make more sense to use apply in this circumstance 
because fruitsObj.list is already in the array format needed to supply
arguments to outputList when using Function.prototype.apply

*/

var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: "A Collection of Fruit"
}


function outputList() {
  console.log(this.title + ':');
  console.log(arguments);
  var args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here
outputList.apply(fruitsObj, fruitsObj.list);

/*

8. For an extra challenge, consider this line of code from the previous problem:

var args = [].slice.call(arguments);

Inside of JavaScript functions, arguments is an object that holds all of the arguments 
passed to the function. Bearing in mind that the function author wants to iterate over 
the arguments later in the method using an Array method, why do you think he or she is 
invoking call?

It isn't possible to call forEach on arguments, because it isn't an array. We can convert
arguments into an Array, gaining access to all Array methods, by "borrowing" the slice method
(there must be a `this` somewhere inside Array.prototype.slice; arguments (as the execution context) 
must have a property inside of it that slice() uses and we borrow slice so that it can make a new 
array using this property)

*/
