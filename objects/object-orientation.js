/*

var scissors = {
	id: 0,
	name: 'Scissors',
	stock: 8,
	price: 10
};

var drill = {
	id: 1,
	name: 'Cordless Drill',
	stock: 15,
	price: 45
};

function setProductPrice(product, price) {
	if (price < 0) {
		alert('The new price is invalid.');
		return;
	}

	product.price = price;
}

Their solution.

function setProductPrice(product, newPrice) {
  if (newPrice >= 0) {
    product.price = newPrice;
  } else {
    alert('Invalid price!');
  }
}

function describeProduct(product) {
	console.log('Name: ' + product.name);
	console.log('ID: ' + product.id);
	console.log('Price: $' + product.price);
	console.log('Stock: ' + product.stock);
}

var scissors = {
	id: 0,
	name: 'Scissors',
	stock: 8,
	price: 10,
	setPrice: function(price) {
		if (price < 0) {
			alert('The new price is invalid.');
			return;
		}

		this.price = price;
	},
	describe: function() {
		console.log('Name: ' + this.name);
		console.log('ID: ' + this.id);
		console.log('Price: $' + this.price);
		console.log('Stock: ' + this.stock);
	}
};

var drill = {
	id: 1,
	name: 'Cordless Drill',
	stock: 15,
	price: 45,
	setPrice: function(price) {
		if (price < 0) {
			alert('The new price is invalid.');
			return;
		}

		this.price = price;
	},
	describe: function() {
		console.log('Name: ' + this.name);
		console.log('ID: ' + this.id);
		console.log('Price: $' + this.price);
		console.log('Stock: ' + this.stock);
	}
};

*/

function createProduct(id, name, stock, price) {
	return {
		id: id, 
		name: name,
		stock: stock,
		price: price,
		setPrice: function(price) {
			if (price < 0) {
				alert('The new price is invalid.');
				return;
			}

			this.price = price;
		},
		describe: function() {
			console.log('Name: ' + this.name);
			console.log('ID: ' + this.id);
			console.log('Price: $' + this.price);
			console.log('Stock: ' + this.stock);
		}
	};
}

var scissors = createProduct(0, 'Scissors', 8, 10);
var drill = createProduct(1, 'Cordless Drill', 15, 45);
var hammer = createProduct(2, 'Molnir', 1, 9001);
var axe = createProduct(3, "Gimli's Axe", 2, 300);
var saw = createProduct(4, "Hand Saw", 15, 40);
console.log(scissors);
console.log(drill);
console.log(hammer);
console.log(axe);
console.log(saw);
