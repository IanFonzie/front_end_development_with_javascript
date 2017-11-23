/*

1. What does the following code log to the console?

notes:
- variable a is declared and assigned a value of 1
- Foo constructor is declared
- Foo is invoked with the new keyword
	- foo.a = 2
	- foo.bar = function() {...}
	- this.bar() invokes bar()
	- which logs 2
- foo.bar() is invoked again, logs 2
- Foo() is invoked
	- this overwrites window.a = 1 now 2
	- window.bar() is now a function
	- window.bar is invoked, logs 2 (the global object's a)
- obj is instantiated
- Foo is called with obj as the execution context
- obj gets an a = 2 property
- obj gets a bar method
- bar() is invoked and logs obj's a value, 2
- bar is called again 2 is logged
- window.a has a value of 2 so 2 is logged

logs:
2 
2 
2 
2 
2 
2

Their explanation:
Line 11 creates a new object foo with the constructor function. The constructor function
calls the bar function while constructing the object which logs 2 out. foo.bar() logs the
next 2. WIth Foo(), we're calling the Foo function with the global context which changes
the global object's a to 2, and logged out the next 2. Foo.call(obj) adds the a property
and the bar method to the obj object, then called the bar method, logging out the next 2.
At this point, we can now call the bar method directly on obj so this logs out the fifth 2. 
Finally, since the global object's a proprety is already change dto 2, the last 2 is logged out

*/

var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();

foo.bar();

Foo();

var obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);

/*

What does the following code log to the console?

notes:
- RECTANGLE object is declared with two methods
- no properties
- Constructor function 
- will have a width and a height
- The methods associate dwith the object will not store the correct value,
they have the execution context of RECTANGLE, which doesn't have width and
height properties
- console.log(rect1.area) will log NaN
- console.log(rect1.circumference) will log NaN

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.circumference = RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);

How do you fix this problem?

*/

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.circumference = RECTANGLE.circumference.call(this);
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);

/*

3. Write a constructor function Circle that takes a radius argument that can create circle objects.
You should be able to call an area on the created objects to get a circle's area. Test your 
implementation with the following code:

*/

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.area = function() {
	return Math.PI * Math.pow(this.radius, 2);
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27

/*

4. What will the following code log out and why?

Notes:
- ninja constructor declaration
- constructor is invoke, new ninja object is created
- ninja object is assigned a swung property
- swingSword method is declared on Ninja.prototype object
- returns object.swung
- even though the swing sword method is defined on the prototype after the 
Ninja object is created, the method prototype chain lookup happens when the method is
called on the object. Since it's now defined on the prototype, when the object calls this
method it will find it on the prototype and invoke it.

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
}

console.log(ninja.swingSword());

5. What will the following code log out and why?

Ninja.prototype (the constructor functions prototype object), has been redefined
to be a new object with the method swingSword. The problem here is that this new
object is not the same one that was defined as the prototype of the objects created by Ninja. They
will not have a reference to this new method because it's not in their prototype chain.

Ninja.swingSword() will return a TypeError.

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  }
}

console.log(ninja.swingSword());

6. Implement the method described in the comments below:

*/

function Ninja(){
  this.swung = false;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung

Ninja.prototype.swing = function() {
	this.swung = true;
	return this;
}

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true

/*

This pattern of "chainable" method invocation on an object requires methods
defined on the prototype to always return the context object (in this case, ninjaA
and ninjaB)

7. In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

*/

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
var ninjaB = Object.create(ninjaA);

// or
// var ninjaB = new ninjaA.constructor()
// ninjaA.constructor points to Ninja() aka the constructor function

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true