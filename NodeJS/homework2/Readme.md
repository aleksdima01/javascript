# Pass_gen


Password generator


## Installation

	$ npm install pass_gen

## Usage

	let pass_gen = require('pass_gen');

By default, you'll get 8 alphanumeric characters in mixed case with special characters:

	let pass = pass_gen.genRandom();
	// z%F%qp#f

Choose a different password length (working in all functions):

	let pass = pass_gen.genRandom(15);
	// ua!h9Tkww!&iXSQ

Generate without special characters:

    let pass = pass_gen.genRandomWithoutSpecialCharacter();
	// 9JTokGPl

Choose only numbers for the password:

    let pass = pass_gen.genNumeric();
	// 77249787

Choose only letters for the password:

    let pass = pass_gen.genLetters();
	// TCqYBCjY

Choose only letters uppercase for the password:

    let pass = pass_gen.genUpperLetters();
	// KJPXVQSS

Choose only letters lowercase for the password:

    let pass = pass_gen.genLowerLetters();
	// zubrpkmc




