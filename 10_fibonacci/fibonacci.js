const fibonacci = function(number) {
	var input = parseInt(number);
	if (number < 1) { return "OOPS"}

	fib = [1,1,2,3,5];
	if (input <= fib.length) {
		return fib[input-1];
	} else {
		for (var i = 4; i < input; i++){
			new_fib = fib [i] + fib[i-1];
			fib.push(new_fib);
		}
	}
	return fib[input-1];
};

// Do not edit below this line
module.exports = fibonacci;
