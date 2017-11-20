/*

1. What are the two principal disadvantages of working with factory functions?

- Every object created by the factory function owns the same methods, which can be redundant.
- There's no way to tell if an object was created by any given factory function.

2. Rewrite the code below to use object-literal syntax to generate the returned object:

function makeObj() {
  var obj = {};
  obj.propA = 10;
  obj.probB = 20;
  return obj;
}

*/

function makeObj() {
  return {
  	propA: 10,
  	probB: 20
  };
}

/*

3. In the following problems, we'll be working through an invoice processing program. To get you
started, we provide you with the following code that can process one invoice:

var invoice = {
  phone: 3000,
  internet: 6500
};
var payment = {
  phone: 1300,
  internet: 5500
};
var invoiceTotal = invoice.phone + invoice.internet;
var paymentTotal = payment.phone + payment.internet;
var remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // 6800
console.log(remainingDue);         // 2700

To be able to process multiple invoices, we'll need to have a factory method 
that we can use to create invoices. The requirements for this factory function are 
the following:

- it returns an invoice object, with phone and internet properties, and a total method
- the default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!)
- the function takes an object argument with attributes to override the default values

Your implemented function should be able to work with the code below:

if services are there
assign those values 

*/

function createInvoice(services) {
  services = services || {};
  return {
  	phone: services.phone || 3000,
  	internet: services.internet || 5500,
  	total: function() {
  		return this.phone + this.internet;
  	}
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
 internet: 6500
}));

invoices.push(createInvoice({
 phone: 2000
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500
}));

console.log(invoiceTotal(invoices));             // 31000

/*

4. Now let's build a factory function to create payments. The function can take an object argument in one of the 3 forms:

payment for one service, such as, {internet: 1000}, {phone: 1000}
payment for both services, such as, {internet: 2000, phone: 1000}
payment with just an amount property, such as {amount: 2000}.
and should return an object that has paid services, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property.

Your code should work with the following:

input: payment object
	- can be for one service {internet: 1000}
	- both services {internet: 2000, phone: 1000}
	- an amount property {amount: 2000}
output:
	- object that has paid services
	- total method that returns the payment total
	- if amount isn't present sum === this.phone + this.internet;
	- else: return this.amount;

definitions/rules:
	- create internet and phone payments, if they exist
	

*/

function createPayment(services) {
	services = services || {};
	return {
		phone: services.phone || 0,
		internet: services.internet || 0,
		amount: services.amount,
		total: function() {
			var total;
			if (this.amount) {
				total = this.amount;
			} else {
				total = this.phone + this.internet;
			}

			return total;
		}
	};
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500
}));

payments.push(createPayment({
  phone: 2000
}));

payments.push(createPayment({
  phone: 1000, internet: 4500
}));

payments.push(createPayment({
  amount: 10000
}));

console.log(paymentTotal(payments));      // 24000

/*

5. Update your createInvoice function to make it possible to add payment(s) 
to invoices. Use the code below as a guideline:

*/

var invoice = createInvoice({
  phone: 1200,
  internet: 4000
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});

invoice.addPayment(payment1)
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0

function createInvoice(services) {
  services = services || {};
  return {
  	phone: services.phone || 3000,
  	internet: services.internet || 5500,
  	payments: [],
  	addPayment: function(payment) {
  		this.payments.push(payment);
  	},
  	addPayments: function(paymentArr) {
  		this.payments = this.payments.concat(paymentArr);
  	},
  	amountDue: function() {
  		var totalPaid = this.payments.reduce(function(sum, amount){
  			return sum += amount.total();
  		}, 0);
  		return this.total() - totalPaid;
  	},
  	total: function() {
  		return this.phone + this.internet;
  	}
  };
}

/*

notes:
- can reuse methods like addPayment:
invoice.addPayments = function(payments) {
	for (var i = 0; i < payments.length; i += 1) {
		this.addPayment(payments[i]);
	}
}
- Should keep methods focused on one task. Instead of:
invoice.amountDue = function() {
	var totalPaid = this.payments.reduce(function(sum, amount) {
		return sum += amount.total();
	}, 0);
	return this.total() - totalPaid;
};

a superior approach would be:
invoice.paymentsTotal = function() {
	return this.payments.reduce(function(sum, amount) {
		return sum += amount.total();
	}, 0);
};

invoice.amountDue = function() {
	return this.total() - this.paymentsTotal();
};

*/