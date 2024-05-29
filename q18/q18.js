//q18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Saudia Arabia", "America", "Australiya", "Iceland", "Norway"];
console.log("original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("original order:", places);
console.log("Revers alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
