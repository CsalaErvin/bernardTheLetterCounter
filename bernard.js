function bernardTheLetterCounter () {
	var sentence = prompt('Please enter a sentence in the box:');
	var character = prompt('Please enter the character to be counted:');
	var characterCount = 0;
	for (counter = 0; counter <= sentence.length; counter++) {
		if (sentence.charAt(counter) == character) {
			characterCount++;
		};
	};
	
	alert('The letter ' + character + ' occurs ' + characterCount + ' times in this sentence.');
	return;
};

bernardTheLetterCounter();