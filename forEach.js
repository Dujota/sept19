// Simple example
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
/**
 * ES5
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
 */

// ES6
//
function add(number) {
  sum += number;
}

function devideBytwo(number) {
  sum += number / 2;
}

// loop over the array, incrementing the sum variable
numbers.forEach(add);
numbers.forEach(devideBytwo);
console.log(sum);

// When to use forEach helper? -- whenever we want to call some method multiple time, while passing in a differennt argument each time (each element in the array) -- this is the use case always!!!

/**
 * EX # 1 refactor for loop into a foreach function
 */
function savePost(post) {
  // saves the post on the backend via $.ajax
}

function handlePost() {
  var posts = [
    { id: 23, title: 'First post' },
    { id: 52, title: 'Second post' },
    { id: 123, title: 'Final post' }
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

// ES6 Refactor
function handlePost() {
  var posts = [
    { id: 23, title: 'First post' },
    { id: 52, title: 'Second post' },
    { id: 123, title: 'Final post' }
  ];

  posts.forEach(function(post, index, posts) {
    savePost(post);
  });
}

/**
 * ex2 processing values
 *calculate the area of each image and store that in a new array
 */

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 40 },
  { height: 30, width: 40 }
];

// NEVER MUTATE YOUR ORIGINAL DATA!!!!!!!
var area = [];

/*solution ES5
for (var i = 0; i < images.length; i++) {
  area.push(images[i].height * images[i].width);
} */

// ES6

images.forEach(function(image) {
  area.push(image.height * image.width);
});
console.log(area);
