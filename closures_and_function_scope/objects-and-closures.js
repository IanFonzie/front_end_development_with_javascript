function makeList() {
	return {
		items: [], 
		add: function(item) {
			var index = this.items.indexOf(item);
			if (index === -1) {
				this.items.push(item);
				console.log(item + ' added!');
			}
		}, 
		list: function() {
			if (this.items.length === 0) {
				console.log("The list is empty");
			} else {
				this.items.forEach(function(item) {
					console.log(item);
				});
			}
		},
		remove: function(item) {
			var index = this.items.indexOf(item);
			if (index !== -1) {
				this.items.splice(index, 1);
				console.log(item + ' removed!');
			}		
		}
	}
}

function makeList() {
	var items = [];

	return {
		add: function(item) {
			var index = items.indexOf(item);
			if (index === -1) {
				items.push(item);
				console.log(item + ' added!');
			}
		}, 
		list: function() {
			if (items.length === 0) {
				console.log("The list is empty");
			} else {
				items.forEach(function(item) {
					console.log(item);
				});
			}
		},
		remove: function(item) {
			var index = items.indexOf(item);
			if (index !== -1) {
				items.splice(index, 1);
				console.log(item + ' removed!');
			} else {
				console.log(item + ' not found!');
			}
		}
	}
}