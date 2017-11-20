/*

1. What naming convention separates constructor functions from other functions?

The naming convention of capitalizing the first leter separates constructor functions
from other functions.

2. What will the code below output? Why?

The code below will output a TypeError because we haven't used the new keyword with the
constructor function and therefore `this` has the execution context of the window object.
Additionally, since we're assigning the return value of Lizard() to lizzy, `this` with the 
context of the object is only implicitly returned if we use the New keyword, otherwise the 
function returns undefined.

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = Lizard();
lizzy.scamper(); // ?

Their explanation:
This code will throw a TypeError, because scamper is an undefined property on lizzy and
not a function (wrong?). This is the case because Lizard was invoked withut the new operator.
As a result this inside of the function pointed to the global object, rather than a new object
to be returned.

*/

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = new Lizard();
lizzy.scamper(); // ?