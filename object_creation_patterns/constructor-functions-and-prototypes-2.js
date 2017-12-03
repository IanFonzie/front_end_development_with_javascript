/*

1. Follow the steps below:

- Create an object called shape that has a type property and a getType method.
- Define a Triangle constructor function whose prototype is shape. Objects 
created with Triangle should have three own properties: a, b and c representing
the sides of a triangle.
- Add a new method to the prototype called getPerimeter.
- Test your implementation with the following code:

*/

var shape = {
	type: '',
	getType: function() {
		return this.type
	}
};

function Triangle(a, b, c) {
	this.type = 'triangle';
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
	return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"

/*

Hard part is to remember to set the constructor to the proper value. Usually,
this is done for you, in that a function's prototype object will automatically
have a property constructor to the function. In this case, since wepointed the
Triangle function's prototype to shape, we lost that constructor and had to set
it back manually.

2. Since a constructor is just a function, it can be called without the new operator,
and this can lead to unexpected results and errors especially for inexperienced programmers.

Write a constructor function that can be used with or without the new operator, and return the
same result in either form. Use the code below to check your solution:

Their solution:
function User(first, last) {
	if (!(this instanceof User)) {
		return new User(first, last);
	}

	this.name = first + ' ' + last;
}

- checks the execution context to see if it's an instanceof User, which checks the execution context's
constructor.
- if it's not an instance of User i.e. window:
	- invokes User using the new keyword
		- same check is performed again in the nested invocation
		- this time it returns false because its execution context is a User
		- sets the instance's name to first + ' ' + last
		- implicitly returns the instance object
	- this object is returned by the return statement.
- else:
	- sets the instance's name to first + ' ' + last
	- implicitly returns the instance object

Their solution is better because it explicitly checks if the execution context is a 
User before calling the constructor.

If I were to call my function with Function.call(a, 'John', 'Doe')

var foo = {
	a: 1
};

var bad = User.call(a, 'dill', 'pickles');

will add that property to foo, whereas their solution will explcitly call User if it's 
not an instance of User

Functions that are written in this manner are caled 'scope-safe constructors'. Most of
Javascript's built-in constructors, such as Object, Regex and Array are scope-safe

*/

function User(first, last) {
  if (this === window) {
  	return new User(first, last);
  } 

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');


console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe

/*

3. Create a function that can create an object with a given object as its prototype, 
without using Object.create.

Can create a temporary constructor function, set its prototype to the argument, then create an 
object based on the constructor. This is a simplified implementation of Object.create

*/

function createObject(obj) {
	function Temp() {}
	Temp.prototype = obj;
	return new Temp();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true

/*

4. Similar to the problem above, create a begetObject function that you can call on any object 
to create an object inherited from it:

input: object
output: object that inherits from the argument object

definitions:
	- Call on any object
	- Object returned inherits properties and behavior from argument

rules:
 - need to add a method to Object.prototype
 - foo calls Object.prototype.begetObject
 - this method will create a new object

Since the begetObject function can be called on any object, we'll 
need to make it a function defined on Object.prototype

*/

Object.prototype.begetObject = function() {
	function F() {}
	F.prototype = this;
	return new F();
}

var foo = {
  a: 1
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true

/*

5. Create a function neww, so that it works like the new operator:

*/

function neww(constructor, args) {
  // ..
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}