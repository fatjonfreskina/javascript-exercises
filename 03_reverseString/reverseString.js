 const reverseString = function reverseString(input) {
	var i = input.length - 1;
	var reversed = '';
	while (i > -1){
		reversed += input[i];
		i -= 1;
	}
	return reversed
};

// Do not edit below this line
module.exports = reverseString;
