/* Function to find min
   */
function min(a, b) {
	return a < b ? a:b
}

console.log(min(0, 10))
console.log(min(0, -10))


/* Function to check evenness using recursion
   */
function isEven(n) {
	if (n < 0) {
		console.log("Not working with negative number")
		return null
	} else if (n == 0) {
		return true
	} else if (n == 1) {
		return false
	} else {
		return isEven(n - 2)
	}
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))


/* Count how many characters k in the string
   */
var countChar = function(str, k) {
	var ret = 0
	for (var i = 0; i < str.length; i++) {
		if (k == str.charAt(i)) {
			ret++
		}
	}
	return ret
}
console.log(countChar("BBC", "B"))
console.log(countChar("kakkerlak", "k"))