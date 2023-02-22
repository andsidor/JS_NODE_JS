
// To compilte in NODE JS:
// Open terminal with file direcory
// run:
// node FILEMANE.JS

console.log( "TEST 6" );

var n = 100;
for (var i = 1, sumOfSquares = 0; i <= n; i++) {
  sumOfSquares += i * i;
}

var squareOfSums = Math.pow(n * (n + 1) / 2, 2);

console.log(squareOfSums - sumOfSquares);

