/* a range function that takes two arguments,
   start and end, and returns an array containing
   all the numbers from start up to
   (and including) end.
   */
var range = function(start, end) {
	var ret = []
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
	var s = 0
	for (var i = 0; i < array.length; i++) {
		s += array[i]
	}
	return s
}
console.log(sum(range(1, 10)))


/* Function to reverse an array
   */
function reverseArray(array) {
	var ret = [], n = array.length
	for (var i = 0; i < n; i++) {
		ret.push(array[n - 1 - i])
	}
	return ret
}


/* Function to reverse an array in place
   */
function reverseArrayInPlace(array) {
	var n = array.length
	for (var i = 0; i < n / 2; i++) {
		temp = array[i]
		array[i] = array[n - 1 - i]
		array[n - 1 - i] = temp
	}
}
console.log(reverseArray(["A", "B", "C"]))
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)


/* Function to turn an array to list
   where list is a structure whose each element has
   two components: value and a sublist. Ex:
   var list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null} } };
   */
function arrayToList(array) {
	if (array.length == 0) {
		return null
	} else {
		var list = {}
		list.value = array[0]
		list.rest = arrayToList(array.slice(1))
		return list
	}
}
// Bad solution for using slice! Should looping from the end of array

function arrayToList_2(array) {
	var list = {}
	var tracker = list
	if (array.length == 0) {
		return null
	} else {
		tracker.value = array[0]
		tracker.rest = null
		for (var i = 1; i < array.length; i++) {
			var sublist = {value: array[i], rest: null}
			tracker.rest = sublist
			tracker = sublist
		}
	}
	return list
}


/* Function to return a list to an array
   */
function listToArray(list) {
	var array = [], tracker = list;
	while (tracker != null) {
		array.push(tracker.value)
		tracker = tracker.rest
	}
	return array
}


/* Function to take an element and a list and
   creates a new list that adds the element to
   the front of the input list
   */
function prepend(element, list) {
	var new_list = {
		value: element,
		rest: list
	}
	return new_list
}


/* Function to take a list and a number and returns
   the element at the given position in the list,
   or undefined when there is no such element.
   */
function nth(list, number) {
	var tracker = list
	for (var i = 0; i <= number; i++) {
		if (tracker == null) {
			return undefined
		}
		var element = tracker
		tracker = tracker.rest
	}
	return element.value
}
console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
console.log(nth(arrayToList([1, 2, 3, 4, 5, 6]), 6))

console.log(arrayToList_2([1, 2, 3]))


/* function, deepEqual, that takes two values and
   returns true only if they are the same value or
   are objects with the same properties whose
   values are also equal
   */
function deepEqual(valueA, valueB) {
	if (valueA == valueB) {
		return true
	} else if (typeof valueA != typeof valueB) {
		return false
	} else if (Object.keys(valueA).length != Object.keys(valueB).length) {
		return false
	} else {
		for (var i in valueA) {
			if ( !(i in valueB) || !deepEqual(valueA[i], valueB[i]) ) {
				return false
			}
		}
		return true
	}
}
var obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}))
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))