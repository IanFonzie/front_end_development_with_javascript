// function makeCar(rate) {
// 	return {
// 		speed: 0,
// 		rate: rate,
// 		accelerate: function() {
// 			this.speed += this.rate;
// 		}
// 	};
// }

var hatchback = makeCar(9);
console.log(hatchback);

/*
input: rate and braking rate
output: an object that that can brake() at the rate supplied
in the object factory

definition/rules:
- supply the rate and the breaking rate as arguments to the
object factory
- set rate = rate and brakingRate = brakingRate
- create a brake() function that subtracts the brakingRate
from the currentSpeed and assigns that as its speed value

*/

function makeCar(rate, brakingRate) {
	return {
		speed: 0,
		rate: rate,
		brakingRate: brakingRate,
		accelerate: function() {
			this.speed += this.rate;
		},
		brake: function() {
			this.speed -= this.brakingRate;
			if (this.speed < 0) {
				this.speed = 0;
			}
		}
	};
}

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);