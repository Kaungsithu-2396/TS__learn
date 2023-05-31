"use strict";
const personA = {
    name: "mg kaung",
    age: 13,
};
//structural typing
//only if the structure of type is same, they can be equivalent with the rule of structural typing
const staffA = personA;
function displayInfo(obj) {
    return obj.name + " " + obj.age;
}
let dataA = displayInfo(personA);
console.log(dataA);
let dataB = displayInfo(staffA);
console.log(dataB);
let p = {
    x: 2,
    y: 3,
};
let threeDPoint = {
    x: 4,
    y: 5,
    z: 6,
};
p = threeDPoint;
console.log(p);
