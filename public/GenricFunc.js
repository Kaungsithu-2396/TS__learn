"use strict";
function reverseArray(array) {
    return array.reverse();
}
// Usage example
const numbers = [1, 2, 3, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
const chechType = (arg) => {
    return typeof arg;
};
console.log(chechType(numbers));
let obj__ = {
    name: "mg kaung",
    DOB: "3",
};
//constratit generic ( restrict the type that can be genericed )
function largestArr(a, b) {
    if (a.length > b.length) {
        return a;
    }
    return b;
}
const firstCompare = largestArr([1, 2], [1, 4, 3]);
console.log(firstCompare);
