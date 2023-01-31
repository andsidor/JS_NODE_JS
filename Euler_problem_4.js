
// To compilte in NODE JS:
// Open terminal with file direcory
// run:
// node FILEMANE.JS

function isPalindrome(n) {
	var temp = n;
	var reverse = 0;
	while (temp !== 0) {
		reverse = reverse * 10 + temp % 10;
		temp = Math.floor(temp/10);
	}
	return reverse === n;
}

function maxProductPalindrome(min, max) {
	var maximum = 0;
	var product;
	var a = min;
	while (a <= max) {
		var b = min;
		while (b <= max ) {
			product = a * b;
			if (isPalindrome(product) && product > maximum) {
				maximum = product;
			}
			b++;
		}
		a++;
	}
	return maximum;
}

console.log( maxProductPalindrome(100, 999) );
