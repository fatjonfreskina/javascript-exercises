const add = function() {
	var sum = 0;
	for (var i = 0; i<arguments.length; i++){
		sum += arguments[i];
		}
		return sum;
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
	
};

const multiply = function(arr) {
	var mul = 1;
	for (var i = 0; i < arr.length; i++){
		mul = mul * arr[i];
	}
	return mul;

};

const power = function() {
	return arguments[0]**arguments[1];
};

const factorial = function(input) {
	var result = 1;
	if (input == 0) {
		return 1;
	} else {
		for (var i = 1; i <= input ; i++){
			result = result * i;
		}
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
