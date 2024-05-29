//q18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

let places: string[] = ["Saudia Arabia", "America", "Australiya", "Iceland", "Norway"];
console.log("original order:", places);
console.log("Alphabetical order:", [...places].sort());

console.log("original order:", places);
console.log("Revers alphabetical order:", [...places].sort().reverse());

console.log("original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);