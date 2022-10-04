const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const sum = function(a) {
// 	// let sum = 0;
// 	// for (let i = 0; i < a.length; i++) {
// 	// 	sum += i;
// 	// }
// 	// return sum;
// 	return array.reduce((total, current) => total + current, 0);
// };

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
// 
// const multiply = function(a) {
// 	// let sum = 1;
// 	// for (let i = 0; i < a.length; i++) {
// 	// 	sum *= i;
// 	// }
// 	// return sum;
// };

const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	if (a == 0 || a == 1) {
		return 1;
	}
	for (let i = a - 1; i >=1; i--) {
		a *= i;
	}
	return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
