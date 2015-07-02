/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


var isMult = function(input){
  for (var j = 20 ; j > 0 ; j--){
    if (input%j){
      return false;
    }
  }
  return true;
};

var smallestMult = function(){
  for (var i = 20 ; ; i++){
    if ( isMult(i) ){
      return i;
    }
  }
  return null;
};
