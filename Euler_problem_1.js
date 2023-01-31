
// To compilte in NODE JS:
// Open terminal with file direcory
// run:
// node FILEMANE.JS

function sumEulProb(n) {
	var sum = 0;
	while (n--) {
		if (n % 3 === 0 || n % 5 === 0) {
			sum += n;
		}
	}
	return sum;
};

console.log( sumEulProb(1000) );