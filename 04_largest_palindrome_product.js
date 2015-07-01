/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/



var isPalindrome = function(input){
  var offset = Math.floor(input.length/2);
  for (var i = 0 ; i<=offset ; i++){
    if (input[i] !== input[input.length-1-i]){
      return false;
    }
  }
  return true;
};

var isDivBy3Dig = function(input){
  for (var i = 999 ; i > 99 ; i--){
    if (input%i === 0 && input/i > 99 && input/i < 1000){
      return true;
    }
  }
  return false;
};

var findLargestPal = function(input){
  for (var i = input-1 ; i > 0 ; i--){
    if ( isPalindrome(i.toString()) ){
      return i;
    }
  }
};

var largestPalProduct = function(){

  var largestNum = 999*999;

  var largestPal = findLargestPal(largestNum);

  while (largestPal > 10000){
    if ( isDivBy3Dig(largestPal) ){
      return largestPal;
    } else {
      largestPal = findLargestPal(largestPal);
    }
  }

  return null;

};




