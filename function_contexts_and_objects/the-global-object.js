/*

1. In a browser environment, what is meant by implicit execution context?

The implicit execution context is the scope under which functions and 
variables are executed. In the case of the browser environment, functions
and variables that are declared or used in the implicit execution context
are attached to the window object.

2. What does the code below output?

*/

a = 10;

console.log(window.a === a);

/*

The code below outputs true because the implicit execution context of `a`
is the window/global object for evaluating expressions. This is adding a 
property `a` to the window object with the value 10.

3. What does the code below output? 

*/

function func() {
  var b = 1;
}

func();

console.log(b);

/*

The code below outputs a ReferenceError because the declaration of 
b is local to `func()`/ in the function scope; no property is created 
on the global/window object and we get a ReferenceError if we try to 
refer to the value.

4. What does the code below output?

*/

function func() {
  b = 1;
}

func();

console.log(b);

/*

Since no variable is declared (but it is initialized) in `func()`, 
it will create a property `b` on the global object, even though it's
initialized in function scope. Since it is a property of the window 
object console.log(b) will log `1`.

5. Of the variables a, b, and c below, can any be successfully deleted?

*/

var a = 1;
b = 'Hi there';
var c = '-50';

delete a; // => ?
delete b; // => ?
delete c; // => ? 

/*

Only variable `b` can be deleted, since it was initialized but not declared
on the global object. `a` and `c` were declared and therefore cannot be deleted

6. In the code below, will we be able to delete func?

*/

function func() {
  console.log("I'm a function!");
}

delete func; // => ?

/*

We will not be able to delete `func()` because we've declared it using
the `function` keyword for the same reasons mentioned in number 5. This is
effectively creating a new variable and assigning a function to it

7. Of the variables a, b, and c below, can any be deleted?

*/

window.a = 1;
b = 2;
var c = b;

delete window.a; // => ?
delete window.b; // => ?
delete window.c; // => ?

/*

variables `b` and `a` can be deleted since they remain undeclared. We've explicitly
initialized `a` as a property of window and `b` is implicitly added to the window object.
`c` will retain a refernce to the same Number 2 that b was pointing to after deletion.

*/
