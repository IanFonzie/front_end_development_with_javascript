function Vehicle() {
	if (!(this instanceof Vehicle)) {
		return new Vehicle();
	}
	return this;
}

Vehicle.prototype = {
	doors: 4,
	wheels: 4
};

var sedan = new Vehicle();
var coupe = new Vehicle();

coupe.doors = 2;

console.log(sedan.hasOwnProperty('doors'));
console.log(coupe.hasOwnProperty('doors'));

function Coupe() {
	if (!(this instanceof Coupe)) {
		return new Coupe();
	}
	return this;
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Coupe.prototype.constructor = Coupe;

function Motorcycle() {
	if (!(this instanceof Vehicle)) {
		return new Vehicle();
	}
	this.doors = 0;
	this.wheels = 2;
	return this;
}

Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.constructor = Motorcycle;

var crx = new Coupe();
var monster = new Motorcycle();

console.log(crx instanceof Coupe);
console.log(crx instanceof Vehicle);
console.log(crx instanceof Motorcycle);

function Sedan() {}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;

var sedan = new Sedan();
console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);
console.log(sedan instanceof Motorcycle);