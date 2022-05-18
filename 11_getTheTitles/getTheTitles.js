const getTheTitles = function(arr) {
	var titles = [];
	for (var i = 0 ; i < arr.length; i++){
		/*var title = arr[i]["title"];*/
		// titles.push(title);
	}
	// Or, using the built in forEach function
	arr.forEach(obj => titles.push(obj["title"]));
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
