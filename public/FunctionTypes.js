"use strict";
// type addFunc = (a: number, b: number) => number;
// const add: addFunc = (a, b) => a + b;
// console.log(add(1, 2));
let earth = {
    name: "ma ma gyee",
    info: (txt) => txt.toUpperCase(),
};
console.log(earth.info("Welcome"));
const isEvan = (x) => x % 2 == 0;
isEvan.description = "hello from function with property";
function triggerAction(fn) {
    console.log(`${fn.description} and result is ${fn(5)}`);
}
triggerAction(isEvan);
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
const showDate = (ctor) => {
    return ctor();
};
console.log(showDate(Date));
function greetFunc(fn) {
    fn("hello from practice");
}
const introFunc = (txt) => console.log(txt);
greetFunc(introFunc);
//nested function
function nestedFunc(x) {
    return function (y) {
        return x * y;
    };
}
const multiplyWithTwo = nestedFunc(2);
multiplyWithTwo(4);
