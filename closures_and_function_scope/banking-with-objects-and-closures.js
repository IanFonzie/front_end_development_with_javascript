// 1.
var account = {
	balance: 0
};

// 2.
var account = {
	balance: 0,
	deposit: function(amount) {
		this.balance += amount;
		return amount;
	}
};

// 3.
var account = {
	balance: 0,
	deposit: function(amount) {
		this.balance += amount;
		return amount;
	},
	withdraw: function(amount) {
		if (amount > this.balance) {
			amount = this.balance;
		}
		this.balance -= amount;
		return amount;
	}
};

// 4.
var account = {
	balance: 0,
	transactions: [],
	deposit: function(amount) {
		this.balance += amount;
		this.transactions.push({type: 'deposit', amount: amount});
		return amount;
	},
	withdraw: function(amount) {
		if (amount > this.balance) {
			amount = this.balance;
		}
		this.balance -= amount;
		this.transactions.push({type: 'withdraw', amount: amount});
		return amount;
	}
};

// 5.
function makeAccount() {
	return {
		balance: 0,
		transactions: [],
		deposit: function(amount) {
			this.balance += amount;
			this.transactions.push({type: 'deposit', amount: amount});
			return amount;
		},
		withdraw: function(amount) {
			if (amount > this.balance) {
				amount = this.balance;
			}
			this.balance -= amount;
			this.transactions.push({type: 'withdraw', amount: amount});
			return amount;
		}
	};
}

var account = makeAccount();

// 6.
function makeBank() {
	return {
		accounts: []
	};
}

// 7.
function makeBank() {
	return {
		accounts: [],
		openAccount: function() {
			var account = makeAccount();
			account.number = this.accounts.length + 101;
			this.accounts.push(account);
			return account;
		}
	};
}

// 8.
function makeBank() {
	return {
		accounts: [],
		openAccount: function() {
			var account = makeAccount();
			account.number = this.accounts.length + 101;
			this.accounts.push(account);
			return account;
		}, 
		transfer: function(from, to, amount) {
			from.withdraw(amount);
			to.deposit(amount);
			return amount;
		}
	};
}

// 9.
var makeBank = function() {
	function makeAccount(number) {
		var balance = 0;
		var transactions = [];
		
		return {
			balance: function() {
				return balance;
			},
			number: function() {
				return number;
			},
			transactions: function() {
				return transactions;
			},
			deposit: function(amount) {
				balance += amount;
				transactions.push({type: 'deposit', amount: amount});
				return amount;
			},
			withdraw: function(amount) {
				if (amount > balance) {
					amount = balance;
				}
				balance -= amount;
				transactions.push({type: 'withdraw', amount: amount});
				return amount;
			}
		};
	}

	return {
    accounts: [],
    openAccount: function() {
      var nextId = this.accounts.length + 101;
      var account = makeAccount(nextId);
      this.accounts.push(account);
      return account;
    },
    transfer: function(source, destination, amount) {
    	from.withdraw(amount);
			to.deposit(amount);
			return amount;
    }
  };
}

// 10
var makeBank = function() {
	var accounts = [];

	function makeAccount(number) {
		var balance = 0;
		var transactions = [];
		
		return {
			balance: function() {
				return balance;
			},
			number: function() {
				return number;
			},
			transactions: function() {
				return transactions;
			},
			deposit: function(amount) {
				balance += amount;
				transactions.push({type: 'deposit', amount: amount});
				return amount;
			},
			withdraw: function(amount) {
				if (amount > balance) {
					amount = balance;
				}
				balance -= amount;
				transactions.push({type: 'withdraw', amount: amount});
				return amount;
			}
		};
	}

	return {
		openAccount: function() {
			var nextId = accounts.length + 101;
			var account = makeAccount(nextId);
			accounts.push(account);
			return account;
		}, 
		transfer: function(from, to, amount) {
			from.withdraw(amount);
			to.deposit(amount);
			return amount;
		}
	};
}
