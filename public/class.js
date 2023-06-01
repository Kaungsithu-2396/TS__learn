"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function triggerPerson(fn) {
    return new fn("mg kg", 12);
}
console.log(triggerPerson(Person));
