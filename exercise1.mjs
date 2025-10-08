/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const products = [
  "  mobile phone ",
  " laptop computer  ",
  "Headphones",
  "  smartwatch",
];

// Your code here
const cleanedProducts = products.map((item) => {
  const trimmed = item.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase(); 
});

console.log(cleanedProducts);
