/*

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/


var sumOfSquares = function(num){
  var total = 0;
  for (var i = num ; i > 0 ; i--){
    total += i*i;
  }
  return total;
};

var squareOfSums = function(num){
  var total = 0;
  for (var i = num ; i > 0 ; i--){
    total += i;
  }
  total = total*total;
  return total;
};

var difference = function(num){
  return squareOfSums(num) - sumOfSquares(num);
};
