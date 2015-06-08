// Find the sum of all the multiples of 3 or 5 below 1000.

var multiples = [];

for (var i = 0 ; i < 1000 ; i++){
  if (i%3 === 0 || i%5 === 0){
    multiples.push(i);
  }
}

multiples.reduce(function(a,b){
  return a + b;
});