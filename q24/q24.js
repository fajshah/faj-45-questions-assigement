//q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//Equality with strings
console.log("Testing equality with strings:");
console.log("apple" === "apple"); // True
console.log("\"apple\" === \"Apple\""); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() === "apple"); //True
//Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); //True
console.log(2 < 1); //False
//Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or' :");
console.log(true && false); //False
console.log(true || false); //True
//Test whether an item is in array
var car = [1, 2, 3];
console.log("test number", car.includes(1));
//Test whether an item is not in array
var car1 = [1, 2, 3];
console.log("test number", !car.includes(6));
