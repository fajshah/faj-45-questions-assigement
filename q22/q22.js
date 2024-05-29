//q22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var friends = ["Nimra", "Maida", "Shafia"];
console.log(friends[3]); //Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Maida"; // Correcting the error by accessing a valid index.
