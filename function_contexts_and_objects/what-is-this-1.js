/*

1. What does this point to in the code below?

whatIsMycontext() has not been invoked yet, so this has no known execution context until 
we call the it.

*/

function whatIsMyContext() {
  return this;
}

/*

2. What does this point to in the code below?

Since whatIsMyContext() is a Function and we're providing no explicit execution context,
this will point to the window/global object.

Thier words: Function calls set the execution context to the implicit global object,
when we use the global object to implictly call a function, we call it with the global object

*/

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

/*

2. What does this point to in the code below?

this points to the global/window object because this code is a series of nested
function calls and Function calls set the execution context to the implicit global
object.

Their explanation: Since we call baz with the implicit global context,
this is the window object

*/

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();

/*

4. What does this point to in the code below?

obj.method() is a method call and has an implicit execution context of the calling object,
therefore this points to obj

*/

var obj = {
  count: 2,
  method: function() {
    return this.count;
  }
};

obj.method();

/*

5. What does the following program log to the console?

Since foo() is a Function and functions use the implicit global context, this in foo()
refers to the window object. Since we assigned a property of window.a = 2, this program
will log 2 to the console.

*/

function foo() {
  console.log(this.a);
}

var a = 2;
foo();

/*

6. What does the following program log to the console?

here, bar simply acts as a function expression and we are assigning that function
expression to obj as one of its methods, obj.foo(). Therefore when we call obj.foo()
it is executing in the context of obj and will use obj as its execution context.

Their explanation:
Line 12 calls method foo with its context set to obj. Since foo points to function bar
this code also calls bar with obj as the context

*/

var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar
};

obj.foo();

/*

7. What does the following code log to the console?

foo.bar() is a method call and its execution context is foo when foo.bar()
is invoked. This will invoke foo.baz(), whose execution context should also
be foo, which is what will be returned and logged.

qux is a function, that has the same body as foo.bar but when it is invoked
its execution context no longer refers to foo. It uses the implicit global context
which will look for a window.baz() property and not find anything. Since nothing
is found on the window object, we get a TypeError, window.baz is not a function.

Their explanation:
line 11 sets this in bar to the foo object and then calls foo's baz method.
baz returns foo since it has foo's context, which causes lie 4 to log foo. 
Line 13 calls bar as a function in the global context, window; since baz doesn't
exist in window JS raises an error.

*/

foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  }
};

foo.bar();
var qux = foo.bar;
qux();
