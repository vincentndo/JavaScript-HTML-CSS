/* Write program to print out:
	#
	##
	###
	####
	#####
	######
	#######
*/

var string = ""
for (var i = 0; i < 7; i++) {
	string += "#"
    console.log(string)
}
console.log()


/* Write program to print number from 1 to 100
   "Fizz" if number divisible by 3
   "Buzz" if number divisible by 5
   "FizzBuzz" if number divisible by 3 and 5
   */

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		process.stdout.write("FizzBuzz ")
	} else if (i % 3 == 0) {
		process.stdout.write("Fizz ")
	} else if (i % 5 == 0) {
		process.stdout.write("Buzz ")
	} else {
		process.stdout.write(i + " ")
	}
}
console.log()


/* Print chessboard
	 # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #
*/

var size = 16, odd = "", even = ""

for (var i = 0; i < size / 2; i++) {
	odd += " #"
	even += "# "
}

for (var i = 0; i < size / 2; i++) {
	console.log(odd)
	console.log(even)
}
