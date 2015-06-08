// What is the largest prime factor of the number 600851475143 ?

var isPrime = function(value){
  for (var i = value-1 ; i > 1 ; i--){
    if ( (value/i)%1 === 0 ){
      return false;
    }
  }
  return true;
};

var isFactor = function(product, factor){
  if (product%factor === 0){
    return true;
  }
  return false;
}

var largestPrime = function(value){
  var value = value;
  var factors = [];
  for (var i = value-1 ; i > 1 ; i--){
    if ( isFactor(value, i) ){
      factors.push(i);
    }
  }
  console.log('factors: ', factors);
  for (var i = factors.length-1 ; i >= 0 ; i--){
    if ( isPrime(factors[i]) ){
      return factors[i];
    }
  }
  return null;
};