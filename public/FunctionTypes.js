"use strict";
// type addFunc = (a: number, b: number) => number;
// const add: addFunc = (a, b) => a + b;
// console.log(add(1, 2));
let earth = {
    name: "ma ma gyee",
    info: (txt) => txt.toUpperCase(),
};
console.log(earth.info("Welcome"));
function doSmth(fn) {
    console.log `${fn.description} ${fn(4)}`;
}
const isEvan = (n) => n % 2 == 0;
isEvan.description = "isEvan called";
doSmth(isEvan);
// type chgUpperCase = (txt: string) => string;
// const letterUpper: chgUpperCase = (txt) => txt.toUpperCase();
// console.log(letterUpper("mg aye"));
//construct signature
class constructorTst {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function fn(ctor) {
    return new ctor("mg kaung", 20);
}
console.log(fn(constructorTst));
