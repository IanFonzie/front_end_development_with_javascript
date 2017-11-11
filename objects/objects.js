var invoices = {
	unpaid: []
};

invoices.add = function(clientName, numberOwed) {
	var invoice = {
		name: clientName,
		amount: numberOwed
	};
	
	this.unpaid.push(invoice);
}

invoices.totalDue = function() {
	return this.unpaid.map(function(invoice) {
		return invoice.amount;
	}).reduce(function(total, invoiceAmount) {
		return total += invoiceAmount;
	});
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

console.log(invoices.totalDue());

invoices.paid = [];

invoices.payInvoice = function(clientName) {
	currentlyUnpaid = [];
	currentObject = this;

	currentObject.unpaid.forEach(function(invoice) {
		if (invoice.name === clientName) {
			currentObject.paid.push(invoice);
		} else {
			currentlyUnpaid.push(invoice);
		}
	});

	currentObject.unpaid = currentlyUnpaid;
}

invoices.totalPaid = function() {
	var total = 0;

	for (var i = 0; i < this.paid.length; i += 1) {
		total += this.paid[i].amount;
	}

	return total;
}

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

/*

input:
	clientName && numberOwed
output:
	- new object with clientName and numberOwed as properties
	- push the object to the unpaid array

definitions:
	- object should look like:
		- {name: "Starbucks" amount: 300}
	- use this to reference unpaid array in your method

Definitions:
	- add an empty array as a paid property to invoices

payInvoice:
	-input: clientName

	-definitions:
		- loop over the unpaid invoices and check the name of each.
			- if the name matches
				- push the invoice to the paid property
			else
				- push to a new array that's a local variable in your method
			- replace unpaid array with the local variable array
*/

