const WIDTH = 800, HEIGHT = 800;

const body = document.body;

const canv = document.createElement("canvas");
canv.width = WIDTH;
canv.height = HEIGHT;
body.appendChild(canv);
const ctxt = canv.getContext("2d");

/**
 * @param {string[]} letters
 * @returns {string[]}
 */
const get_words_from_letters = letters => {
	const valid_words = [];

	for(const word of words) {
		if(word.length > letters.length) continue;

		const word_arr = word.split("");
		const valid = word_arr.every(letter => letters.includes(letter)
			&& word_arr.filter(el => el === letter).length <= letters.filter(el => el === letter).length
		);

		if(valid) valid_words.push(word);
	}

	return valid_words;
}

console.log(get_words_from_letters(["t", "h", "i", "n", "k"]));