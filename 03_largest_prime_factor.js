// What is the largest prime factor of the number 600851475143 ?

var isPrime = function(value){
  for (var i = value-1 ; i > 1 ; i--){
    if ( (value/i)%1 === 0 ){
      return false;
    }
  }
  return true;
};

var isFactor = function(product, value){
  if (product%value === 0){
    return true;
  }
  return false;
}

var largestPrime = function(value){
  for (var i = 2 ; i < value/2 ; i++){
    if ( isFactor(value, i) ){
      var greaterFactor = value/i;
      if ( isPrime(greaterFactor) ){
        return greaterFactor;
      }
    }
  }
  return null;
};
