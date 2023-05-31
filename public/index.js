"use strict";
let person = "Kaung si thu";
let data = person.slice(0, 2).toUpperCase();
function chgUpperCase(str) {
    return str.toUpperCase();
}
console.log(chgUpperCase(data));
function greet(person, date) {
    console.log(`
         Welcome  ${person}, today is ${date.toDateString()}!
      `);
}
greet("Mg kaung", new Date());
