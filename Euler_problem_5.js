
// To compilte in NODE JS:
// Open terminal with file direcory
// run:
// node FILEMANE.JS

console.log( "TEST" );

var n = 2520;

while (true) {
  for (var i = 2; i < 20; i++) {
    
    if (n % i) {
      break;
    }
  }
  if (i < 20) {
    n++;
  } else {
    break;
  }
}

console.log(n);