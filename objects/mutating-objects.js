/*

- message local is undefined when we call func()
- the local message is logged to the console
- then the global message is logged

1. This logs:
	- "Hello from the function scope!"
	- "Hello from the global scope!"

*/

var message = "Hello from the global scope!";

function func(message) {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);

/*

- obj is assigned the same pointer as myObj; they both point to the same
address in memory
- obj's (&myObj's) message property is reassigned.
- console will log the reassigned message
- obj falls out of scope, myObj's message property is still mutated
- logs the modified message again

2. This logs:
	- "Greetings from the function scope!"
	- "Greetings from the function scope!"

	This demonstrates that:
	- Objects are mutable.
	- When we pass a variable that references an object, 
	we are passing a pointer to the object's location in memory
	- if you change a property on an object, all pointers that 
	reference it will see the effects

in their terms:
- Demonstrates the mutability o fobjects, in contrast with the immutability 
of primitives. an object can have its data changed without breaking the connection
to any variables pointin gto it. Reassigning myObj's property message inside function
function scope doesn't break myObj's connection to the object itself.

*/

var myObj = { message: "Greetings from the global scope!" };

function func(obj) {
  obj.message = "Greetings from the function scope!";
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

/*

- There is no parameter for message this time
- The global message gets reasigned to the function scope string
- Function message is logged
- The global variable with the same value as the function message is logged

3. This logs:
	- "Hello from the function scope!"
	- "Hello from the function scope!"

*/

var message = "Hello from the global scope!";

function func() {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);

/*

- Instantiating an object `obj`
- Define a variable a pointing to the number 10
- create a newObj pointer to the same object is `obj`
- newObj/obj's a property is incremented by 10; this breaks the reference to the original
primitive 10
- since obj.a and a are different Numbers now, this will log false
- newObj and obj are still both pointers pointing to the same object address in the heap

In their words:
	- primtive values are immutable and the reassignment newObj.a += 10
	breaks the refrence to the original primitive value 10. This leads to a false
	comparison for the first log statement. Objects are mutable and newObj references obj;
	newObj's propreties can be altered without breaking the reference to the obj address in memory.
	Although newObj and obj are different variables they are referencing the same object

4. This logs:
	- false
	- true

*/

var a = 10;
var obj = {
  a: a
}

var newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);

/*

- define a new object animal
- define another new object menagerie, with a property
warthog that references the animal object
- reassign animal to a new object
- add a property to menagerie that references the
new animal object
- we do a comparison between the menagerie.warthog 
to the current animal object
- we do a comparison between menagerie.meerkat and 
the current animal oject

5. If objects are mutable, why does the second to last line return false?
Objects are indeed mutable, but when we assign to the animal variable a second time
we are not modifying the properties of the original animal object, we are creating an
entirely new object using literal syntax. This object points to a new location in memory
and will not affect the warthog property that is referencing the original animal object

In their words:

Line 10 creates a new object and assigns it to animal, reassigning the variable rather 
than mutating the original value. This new object isn't the same as the object initialized
on line 1, and as a result, the second to last line outputs false, and the last line 
outputs true.

*/

var animal = {
  name: "Pumbaa",
  species: "Phacochoerus africanus"
};

var menagerie = {
  warthog: animal
};

animal = {
  name: "Timom",
  species: "Suricata suricatta"
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
