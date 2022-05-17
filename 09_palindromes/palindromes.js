const palindromes = function (input) {
	var word = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	word = word.toLowerCase().trim().replace(/\s/g, '');
	console.log(word);
	last = word.length - 1;
	for (var i = 0; i < word.length; i++){
		console.log("word[i] = " + word[i] + "; word[last] = " + word[last]);
		if (word[i] != word[last]) {
		 return false;
		}
		last -= 1;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
