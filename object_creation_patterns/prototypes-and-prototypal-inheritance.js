/*

1. Write a function that returns the object on a given object's prototype chain where a property 
is defined. See the example code below:

*/

function getDefiningObject(object, propKey) {
	var obj = object;
	while (!obj.hasOwnProperty(propKey)) {
		obj = Object.getPrototypeOf(obj);
		if (obj === null) {
			break;
		}
	}

	return obj;
}

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null

/*

2. Write a function to provide a shallow copy of an object. The copied object should share the
same prototype chain as the original object, and it has the same own properties that return the
same values or objects when accessed. Use the code below to verify your implementation:

*/

function shallowCopy(object) {
	var obj = Object.create(Object.getPrototypeOf(object));
	Object.getOwnPropertyNames(object).forEach(function(property) {
		obj[property] = object[property];
	});

	return obj;
}

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
}

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // c is 3

/*

Alternative solution:

function shallowCopy(object) {
	var result = Object.create(Object.getPrototypeOf(object));
	for (var prop in object) {
		if (Object.prototype.hasOwnProperty.call(object, prop)) {
			result[prop] = object[prop];
		}
	}

	return result;
}

3. Write a function that extends an object (destination object) 
with contents from multiple objects (source objects).

input: multiple objects
output: an object that has all the functionality of the input objects

can't seem to have more than one prototype per object

*/

function extend(destination) {
  // ...
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2
  }
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },
  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  }
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // Hello, Joe