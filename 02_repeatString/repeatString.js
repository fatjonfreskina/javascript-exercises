function repeatString(string, num){

	if (num < 0) {return 'ERROR'}; //handle exception

	var i = 0 ;
	var repeatedString = '';

	while (i<num)
	{
		repeatedString += string;
		i++;
	}

	return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
