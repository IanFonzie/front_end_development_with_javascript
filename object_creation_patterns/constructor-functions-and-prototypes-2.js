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

function Triangle(sideA, sideB, sideC) {
	this.type = 'triangle';
	this.a = sideA;
	this.b = sideB;
	this.c = sideC;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
	return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"
