/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const handleFunction = (callback, value) =>
  typeof callback === "function" ? callback(value) : value;

const zero = (callback) => handleFunction(callback, 0);
const one = (callback) => handleFunction(callback, 1);
const two = (callback) => handleFunction(callback, 2);
const three = (callback) => handleFunction(callback, 3);
const four = (callback) => handleFunction(callback, 4);
const five = (callback) => handleFunction(callback, 5);
const six = (callback) => handleFunction(callback, 6);
const seven = (callback) => handleFunction(callback, 7);
const eight = (callback) => handleFunction(callback, 8);
const nine = (callback) => handleFunction(callback, 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => a * b;
const dividedBy = (a) => (b) => parseInt(b / a);
