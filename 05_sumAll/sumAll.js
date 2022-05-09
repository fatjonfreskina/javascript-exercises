const sumAll = function(num1,num2) {
	var smaller;
	var bigger;
	
	if (num1 < 0 || num2 < 0){ 		//check greater than 0
		return "ERROR"};

	if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){ //check parameters are integers
		return "ERROR";
	}

	if (num1 > num2) {	//fix possible mixed parameters
	    bigger = num1;
	    smaller = num2;
	} else {
	    bigger = num2;
	    smaller = num1;
	}
	
	var sum = 0
	for (var i = smaller; i <= bigger; i++){
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;