/* Use the reduce method in combination with the
   concat method to “flatten” an array of arrays
   into a single array that has all the elements
   of the input arrays.
   */
var arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.reduce( function (a,b) { return a.concat(b) } ))


/* function returns true only when the predicate
   returns true for all elements of the array
   */
var every = function(array, f) {
	for (var i = 0; i < array.length; i++) {
		if ( !f(array[i]) ) {
			return false
		}
	}
	return true
}


/* Function returns true as soon as the predicate
   returns true for any of the elements
   */
var some = function(array, f) {
	for (var i = 0; i < array.length; i++) {
		if ( f(array[i]) ) {
			return true
		}
	}
	return false
}
console.log(every([NaN, NaN, NaN], isNaN))
console.log(every([NaN, NaN, 4], isNaN))
console.log(some([NaN, 3, 4], isNaN))
console.log(some([2, 3, 4], isNaN))