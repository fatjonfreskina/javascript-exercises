const removeFromArray = function(arr) {
	for  (var j = 1; j < arguments.length; j++){

		for (var i = 0; i < arr.length; i++){ 
	    
	        if (arr[i] === arguments[j]) { 
	    
	            arr.splice(i, 1); 
	        }
	    }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
