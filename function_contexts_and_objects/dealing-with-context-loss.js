/*

1. Our desired output for the code below is: Christopher Turk is a Surgeon. 
What will the code output, and what explains the difference, if any, between 
the actual and desired outputs?

notes:
- declare an object turk
	- turk has the properties firstName, lastName and occupation
	- turk has a method getDescription()
- global function is declared logReturnVal(func)
- logReturnVal is called with the method turk.getDescription
- turk.getDescription is executed as an anonymous function/callback
- Since turk.getDescription is executed as a function, it's execution context
is the window/global object.

This code will log:
	- undefined undefined is a undefined.

Their explanation:
turk.getDescription was passed into logReturnVal as an arugment, we removed
that method from its context. AS a result, upon execution as func, this will point
to the global object, rather than turk. Since Window doesn't have properties for 
firstName, lastName or occupation, we get the output we do

*/

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*

2. Alter logReturnVal such that it takes an additional context argument, and use one 
of the methods we've learned in this lesson to invoke func inside of logReturnVal with 
context as its function execution context. Alter the invocation of logReturnVal and supply
turk as the context argument.

I originally used bind to bind the execution context to turk when I passed turk.getDescription to
logReturnVal. After looking at their solution I passed turk as a context object to logReturnVal() 
and used call to invoke the passed in function with the argument execution context. Apply would have
also worked as a solution

*/

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);


/*

3. Suppose that we want to extract getDescription from turk, but always have it execute with turk as 
context. Use one of the methods we've learned in the last lesson to assign such a permanently bound 
function to a new variable, getTurkDescription.

*/

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription.bind(turk));

/*

4. Consider the code below, and our desired output:

*/

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
}

TESgames.listGames();

/*

Desired output:

The Elder Scrolls Arena
The Elder Scrolls Daggerfall
The Elder Scrolls Morrowind
The Elder Scrolls Oblivion
The Elder Scrolls Skyrim

Will this code log our desired output? Why or why not?

notes:
- globally declared object TESgames
- has properties:
	- tiles,
	- seriesTitle,
- has method:
	- listGames

- The execution context of TESgames is available in the method
listGames() and we can retrieve a list to iterate over (TESgames.titles)
- we deal with context loss when the callback function is invoked; the 
implicit execution context of functions is the global/window object, so 
if we try to access TESgames.seriesTitle then we'll be looking for this
property on the global object.
- It won't be there so we'll print undefined + title

Therefore, this code will not log our desired output and instead log: 

undefined Arena
undefined Daggerfall
undefined Morrowind
undefined Oblivion
undefined Skyrim

Their explanation:
- inner functions in objects lose thta object as context. the function
expression invoked on each iteration of forEach  inside of listGames loses
TESgames as execution context. As a result the global object is referenced 
and resolves to undefined rather than "The Elder Scrolls"

*/

/*

5. Use the var self = this fix (introduced in Dealing with Context Loss (2)) 
to alter TESgames.listGames such that it logs our desired output to the console.

*/

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function() {
//   	var self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// }

// TESgames.listGames();

/*

6. If we don't want to rely on var self = this, forEach provides us with 
an alternative means of supplying execution context to the inner function. 
Use this means to achieve our desired output.

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
}

TESgames.listGames();

Explanation: forEach and other list processing methods have an optional
thisArg paramter that set that argument as execution context for the inner
function. In the solution above, we pass this, as the context argument, ensuring
that the value of this in the inner function refers to TESgames.

*/

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }.bind(this));
  }
}

TESgames.listGames();

/*

7. Consider the code below

*/

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
}

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*

What will the value of foo.a be after this code has executed?

The value of foo.a after this code has executed will be 0, because increment is
a function within a method and functions have an implicit execution context of
the global/window object, which doesn't have a property window.a

*/

/*

8. Use one of the methods we learned in this lesson to invoke increment with explicit 
context such that foo.a is incremented with each invocation of incrementA.

*/

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
}

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*

8. We decide that we want each invocation of foo.incrementA to increment
 foo.a by 3, rather than 1, and alter our code accordingly:

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
    increment.apply(this);
    increment.apply(this);
  }
}

Calling apply three times seems repetitive, though. Use bind to permanently
set foo as increment's execution context.

By changing the syntax accoridng to which we create the variable increment
and assign our function to it from function declaration to function expression.
We gain the ability to bind the resultant function to an execution context. We
supply this as context, because inside of method scope, but outside of inner 
function scope, this points back to the object holding the method.

*/

var foo = {
  a: 0,
  incrementA: function() {
    var increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
}
