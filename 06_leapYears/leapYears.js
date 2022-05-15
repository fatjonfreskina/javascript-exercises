const leapYears = function(year) {
	if (year%4 == 0){
		if (year%100 == 0){
			if (year%400 == 0){ 
				return true; // divisible by 4, by 100 and by 400!
			} else {
				return false; // divisible by 4, by 100, not by 400 :(
			}
		} else {
			return true; // divisible by for, but not by 100
		}
	} else {
		return false; // not divisible by 4
	}
};

// Do not edit below this line
module.exports = leapYears;
