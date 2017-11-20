/*

1. Use one of the methods we learned above to assign foo below to a new Object with prot as its prototype.

*/

var prot = {};

var foo = Object.create(prot);

/*

2. Use getPrototypeOf to demonstrate the prototypal relationship between prot and foo.

*/

Object.getPrototypeOf(foo) === prot;

/*

3. Use isPrototypeOf to demonstrate the prototypal relationship between prot and foo.
 
*/

prot.isPrototypeOf(foo);

/*

4. What will the last two lines of the code below return? Why?

The first line returns true because we've created foo using Object.create(obj), which 
defines __proto__ as the object that we explicitly passed in. The second line will print true, because
unless we specify an explicit prototype, the prototype of an object will be Object.prototype.
This object is at the base of all prototype chains. Because of the relationship between foo
and prot, Object.prototype is on foo's prototype chain.

*/

var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo); // true
Object.prototype.isPrototypeOf(foo); // true