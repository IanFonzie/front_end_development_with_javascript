/*

1. In the following code, when can JavaScript garbage collect the values 
represented by the variables a, b, and c?

- a has a value on the stack of 34
- run is invoked
- run invokes add(4)
- b has a value on the stack of 4
- a has a new value on the stack of 38, 34 can be garbage
collected since it's not longer referenced
- 4 can be garbage collected after add() finishes execution
- c has a value on the stack of 38
- 38 can be garbage collected after run() finishes executon
- a's 38 value can be garbage collected after the main program finishes running

*/

var a = 34;

function add(b) {
  a += b;
}

function run() {
  var c = add(4);
}

run();

/*

2. In the following code, when can JavaScript garbage collect the value "Steve"?

- makeHello() is invoked which creates a closure over the name argument
- helloSteve has a reference to "Steve" via the closure
- "Steve" is eligible for garbage collection after the program finishes running
- This happens after JS garbage collects the function referenced by helloSteve

*/

function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  }
}

var helloSteve = makeHello("Steve");
