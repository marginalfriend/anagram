let test = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']


function anagram(arr) {
	let result = []

	// Looping through test
	for (let x of arr) {
		if (result.length == 0) {
			result[0] = [x]
			continue
		}

		let pushed = false
		// Looping through result
		for (let y of result) {
			if (y[0].length != x.length) {
				// console.log(y[0] + " != " + x)
				continue
			}

			// Match counter
			let match = 0;

			// Character matcher - this will contain the character of y[0]
			let matcher = [];

			// Logic of String.split()
			for (let h = 0; h < y[0].length; h++) {
				matcher[h] = y[0][h]
			}

			// Matcher loop
			for (let i = 0; i < y[0].length; i++) {
				for (let j = 0; j < x.length; j++) {
					if (x[j] === matcher[i]) {
						match++
						// Making sure no character matched twice
						matcher[i] = "$"
						console.log(x[j] + " === " + y[0][i] + " | Match counter = " + match + '/' + x.length + " | Matcher = " + matcher)
						continue
					}
					console.log(x[j] + " @ " + x + " !== " + y[0][i] + " @ " + y[0])
				}
			}

			if (match === y[0].length) {
				y[y.length] = x
				pushed = true
				console.log(y + " === " + x + " <=============== MATCH!!! +++++++++")
				continue
			}

			console.log(y + " !== " + x + " <=============== NO MATCH --------")
		}

		if (!pushed) result[result.length] = [x]
	}

	return result
}

console.log(anagram(test))
// anagram(test)