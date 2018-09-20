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
