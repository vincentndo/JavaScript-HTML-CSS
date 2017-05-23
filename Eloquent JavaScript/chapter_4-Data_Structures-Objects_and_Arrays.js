/* a range function that takes two arguments,
   start and end, and returns an array containing
   all the numbers from start up to
   (and including) end.
   */
var range = function(start, end) {
	ret = []
	for (; start <= end; start++) {
		ret.push(start)
	}
	return ret
}
console.log(range(1, 10))


/* a sum function that takes an array of numbers
   and returns the sum of these numbers.
   */
function sum(array) {
	s = 0
	for (var i = 0; i < array.length; i++) {
		s += array[i]
	}
	return s
}
console.log(sum(range(1, 10)))


/* Function to reverse an array
   */
function reverseArray(array) {
	ret = []
	n = array.length
	for (var i = 0; i < n; i++) {
		ret.push(array[n - 1 - i])
	}
}