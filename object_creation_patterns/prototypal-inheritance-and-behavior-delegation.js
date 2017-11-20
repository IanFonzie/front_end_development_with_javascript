/*

1. What will the code below log to console?

The code will log 1 because bar is a prototype of foo and foo possess an `a` property.
The prototype lookup chain begins in bar, when no `a` property is found it moves to the
next prototype in the chain which is foo. Since foo possesses an `a` property, its value
1, is logged to the console.

*/

var foo = {};
var bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);

/*

2. What will the code below log to the console?

This code will log 2 to the console. The prototype lookup chain always begins with the calling object and 
bar possesses an `a` property.

*/

var foo = {};
var bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);

/*

3. Given the code below, do we know for certain that on the last line we are 
ultimately referencing a property owned by boo? How can we test this?

We do not know for certain on the last line that we are referencing a property
owned by boo. This property could have been overwritten elsewhere in the prototype
lookup chain and leading far.hasOwnProperty('myProp') to return true.

Their words:

No, we don't know for certain, because there could be a property myProp created on 
far in the omitted code between the declaration and assignment of far and the property 
reference on the last line. We use hasOwnProperty to test whether myProp is indeed owned by far.


*/

var boo = {};
boo['myProp'] = 1;

var far = Object.create(boo);

// lots of code

far['myProp']; // 1