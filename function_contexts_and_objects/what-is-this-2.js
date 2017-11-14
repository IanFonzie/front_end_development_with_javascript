/*

1. What does this point to in the code below, and what does it return?

since we are calling invoking myObject.myChildObject.myMethod() in the execution context
of myChildObject and myChildObject doesn't have a count property, this code will have a
return value of undefined.

*/

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  }
};

myObject.myChildObject.myMethod();

/*

2. In the previous problem, how would you change the context, 
or the value of this, to be the parent myObject?

*/

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  }
};

myObject.myChildObject.myMethod.call(myObject);

/*

3. What does the following code log to the console?

This will lo Peter Parker is the Amazing Spiderman to the console because
we've bound person to the whoIsSpiderman function, so regardless of where
it's invoked its execution context will be person. 

*/

var person = {
  firstName: "Peter",
  lastName: "Parker",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName +
                " is the Amazing Spiderman!");
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

/*

4. What does the following code log to the console?

obj.func() will log 2 as it has an execution context of obj
obj.func.call() will also log 1, as no execution context was provided as an
argument and the implicit global context was used as a result.
obj.func.call(this) will log 1, since this in the global context is window and
window.a is defined as a property.
obj.func(obj) will log 2, since ancillary arguments are ignored in JavaScript
obj.func.call(obj2) will log 3, since we've provided an explicit execution context
of obj2 and it has a property obj2.a.

*/

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = { a: 3 };
obj.func.call(obj2);

/*

5. What does the following code log to the console?

This will log NaN to the console, because specialDiscount() is an internal
function that loses its original execution context. Because of this it will 
use the implict global context. Since window.price is undefined, a comparison
between undefined and a number will always evaluate to false, which will return
0. As a result no money is taken off in computer.total regardless of the price
of the computer. 

It is also attempting to refer to tax as a property of computer,
when it doesn't exist on that property or any other execution context, returning a 
value of undefined. Since this undefined value is used when caluclating the total,
the result will be NaN.

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + this.tax - specialDiscount();
  }
};

console.log(computer.total());

If you want this program to log 34000, how would you fix it?

I chose to bind the execution context to the function, but you could also
save it in a local variable that is in the lexical scope or call it on the
final line

*/

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());
