var numbers = [1, 2, 3];
var doubledNums = [];

// ES5 for loop -- mimic how map works
for (var i = 0; i < numbers.length; i++) {
  doubledNums.push(numbers[i] * 2);
}
// maping over an array only duplicates the array and returns a ****** NEW array ALWAYS with the same number of elements*****
console.log('doubled:', doubledNums);
console.log('numbers:', numbers);

// Map helper
var doubled = numbers.map(function(number) {
  return number * 2; // always make sure you use a return statement
});
console.log('doubled', doubled);

// more complicated example: array of cars

var cars = [{ model: 'Chevy', price: 15000 }, { model: 'BMW', price: 45000 }];

// this is very common practice in the front end frameworks (react) for extracting data from a backend response (ajax)

var prices = cars.map(function(car) {
  return car.price * 2; // referred as a pluck (plucking data)
});
console.table(cars);
console.log(prices);

// The primary goal of most web apps are just rendering lists of data, this is why map is the most popular array helper mainly because it does not mutate your data.

/**
 * Challenge !!!!!
 * implement pluck on a real world project
 * make a function that accepts an array and a string that represent a prop name and returns an array containing that prop for each object
 *
 * ex:  var people = [{name: 'john'}, {name: 'jane'}]
 * pluck(people, 'name') ----> ['john', 'jane']
 */

var people = [{ name: 'john', age: 15 }, { name: 'jane', age: 20 }];

function pluck(array, property) {
  return array.map(function(element) {
    return element[property]; // i am going to look for the specific key in a particular itiration of the array
  });
}

console.log(pluck(people, 'name'));
