// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var fibArray = [1,2];
var fibEvens = [];

var fibTotal = function(){

  while (fibArray[fibArray.length-1] <= 4000000){
    fibArray.push( fibArray[fibArray.length-1] + fibArray[fibArray.length-2] );
  }

  for (var i = 0 ; i < fibArray.length ; i++){
    if (fibArray[i]%2 === 0){
      fibEvens.push(fibArray[i]);
    }
  }

  return fibEvens.reduce(function(a,b){
    return a + b;
  })
};

fibTotal();
