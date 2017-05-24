/* Constructor Vector that represents a vector in
   two-dimensional space. It takes x and y
   parameters (numbers), which it should save to
   properties of the same name
   */
function Vector(x, y) {
	this.x = x
	this.y = y
}


/* Give the Vector prototype two methods,
   plus and minus, that take another vector as a
   parameter and return a new vector that has the
   sum or difference of the two vectors’ (the one
   in this and the parameter) x and y values
   */
Vector.prototype.plus = function(b) {
	newX = this.x + b.x
	newY = this.y + b.y
	return new Vector(newX, newY)
}

Vector.prototype.minus = function(b) {
	newX = this.x - b.x
	newY = this.y - b.y
	return new Vector(newX, newY)
}

Object.defineProperty(Vector.prototype, "length", {
	get: function() {return Math.sqrt(this.x*this.x + this.y*this.y)}
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length)
console.log()


/* an interface that abstracts iteration over a
   collection of values. An object that provides
   this interface represents a sequence, and the
   interface must somehow make it possible for
   code that uses such an object to iterate over
   the sequence, looking at the element values it
   is made up of and having some way to find out
   when the end of the sequence is reached
   */
function Seq(array) {
	this.array = array
}

Object.defineProperty(Seq.prototype, "length", {
	get: function() {return this.array.length}
})

/* function logFive that takes a sequence object
   and calls console.log on its first five
   elements—or fewer, if the sequence has fewer
   than five elements
   */
var logFive = function(seq) {
	for (var i = 0; i < Math.min(5, seq.length); i++) {
		console.log(seq.array[i])
	}
}

function ArraySeq(array) {
	Seq.call(this, array)
}
ArraySeq.prototype = Object.create(Seq.prototype)

function RangeSeq(from, to) {
	var array = []
	for (var i = from; i < to; i++) {
		array.push(i)
	}
	Seq.call(this, array)
}
RangeSeq.prototype = Object.create(Seq.prototype)

logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 1000))