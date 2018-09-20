/**
 * Common UI feature to filter our subsets of stat, like filtering some products on amazon
 */

//represents Products.all  reponse from controller via ajax call
var products = [
  { name: 'glasses', type: 'casual' },
  { name: 'dress pants', type: 'formal' },
  { name: 't-shirt', type: 'casual' },
  { name: 'suit', type: 'formal' }
];

//use cases? - these are prodcuts on a product page, maybe the user clicks on a filter and that filter triggers some kind of subset to rerender on your front end

var filteredProductsES5 = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'casual') {
    filteredProductsES5.push(products[i]);
  }
}
console.table(filteredProductsES5);

// this is an exact case for why we would not mutate data but rather use filter to create a new array to display the subset of the data from the records that were pulled from the db

/**
 * ES6 version with filter helper
 */
var filtered = products.filter(function(product) {
  return product.type === 'formal';
});
console.table(filtered);

// show me all casual clothing that is in  stock and less than $10

var products = [
  { name: 'glasses', type: 'casual', quantity: 0, price: 1 },
  { name: 'dress pants', type: 'formal', quantity: 10, price: 14 },
  { name: 't-shirt', type: 'casual', quantity: 7, price: 8 },
  { name: 'suit', type: 'formal', quantity: 20, price: 150 }
];

var filterUseCase = products.filter(function(product) {
  return (
    product.type === 'casual' && product.quantity > 0 && product.price < 10
  );
});

console.log('-------------------');
console.table(filterUseCase);

// Use Case # 3 -- blog app or form, where psosts can have multiple comments and we want to see all the comments associated with a specific post

// post comes in from the front end by a user submission
var post = { id: 4, title: 'This is my new blog post and its awesome AF' };

var comments = [
  { postId: 4, content: 'Great post!' },
  { postId: 15, content: 'Good idea, maybe i wil try it' },
  { postId: 4, content: 'Wow, thanks so much' }
];

// make a function that accepts the post and the comments array so we can compare and create the boolean for the filter
function commentsForPosts(postObj, commentsArray) {
  return commentsArray.filter(function(comment) {
    return comment.postId === postObj.id;
  });
}

console.log(
  'Below is the filtered list for the comments based on their relation'
);
console.table(commentsForPosts(post, comments));

// Practice # 2 find only the uysers that have admin rights

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
  { id: 6, admin: false }
];

var isAdmin = users.filter(function(user) {
  return user.admin;
});

console.table(isAdmin);

/**
 * Challenge!!!! HARD ONE!!!!
 * create a reject function that does the opposite of what the filter function is expected to do ( if func retuirns true, then exclude that item from the array)
 * var nums = [10,20,30]
 * var lessThanTwenty = reject(nums, function(num){ return num < 20 }) --->  this logs [10]
 */

var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  // generic func that accepts a callback then passes that callback as the conditional for the logic in the filter
  // need retirn statement inside the first block as there are parenthesis and we need the retuirn kleyword for a block

  return array.filter(function(item) {
    return !iteratorFunction(item); // the ! will turn the false value to a true output and we will receive those items in our new filtered array
  });
}

function checkIftwenty(number) {
  return number > 15;
}

var lessThanTwenty = reject(numbers, checkIftwenty);
console.log(lessThanTwenty);
