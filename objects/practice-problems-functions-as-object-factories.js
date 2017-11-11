var chile = {
  name: "The Republic of Chile",
  continent: "South America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var canada = {
  name: "Canada",
  continent: "North America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var southAfrica = {
  name: "The Republic of South Africa",
  continent: "Africa",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

/*

1. Think about what is necessary and unnecessary in this code. Where is there duplication?

The getDescription aspect of this code is unnecessary to repeat and is a source of duplication.
The name and continent should be provided to the object factory.

Their words:

The method getDescription is repeated in the same form in each object. However, each object 
needs to hold unique values for its name and continent properties.

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    visited: false,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}

function makeCountry(name, continent) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}

function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    },
    visitCountry: function() {
      this.visited = true;
    }
  }
}

*/

function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '. I ' + 
      (this.visited ? 'have' : "haven't") + ' visited ' +
      this.name + '.';
    },
    visitCountry: function() {
      this.visited = true;
    }
  }
}

var chile = makeCountry("The Republic of Chile", "South America");
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

console.log(chile.getDescription()); // "The Republic of Chile is located in South America."
console.log(canada.getDescription()); // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

console.log(canada.getDescription());
canada.visitCountry();
console.log(canada.getDescription());