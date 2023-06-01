// type addFunc = (a: number, b: number) => number;
// const add: addFunc = (a, b) => a + b;
// console.log(add(1, 2));

type EarthData = {
    name: string;
    info: (txt: string) => string;
};
let earth: EarthData = {
    name: "ma ma gyee",
    info: (txt) => txt.toUpperCase(),
};
console.log(earth.info("Welcome"));
//call signature ( when we want to add property to function)
type callSignatureShape = {
    description: string;
    (txt: number): boolean;
};
const isEvan = (x: number) => x % 2 == 0;
isEvan.description = "hello from function with property";
function triggerAction(fn: callSignatureShape) {
    console.log(`${fn.description} and result is ${fn(5)}`);
}
triggerAction(isEvan);

// type chgUpperCase = (txt: string) => string;
// const letterUpper: chgUpperCase = (txt) => txt.toUpperCase();
// console.log(letterUpper("mg aye"));

//construct signature
class constructorTst {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
type someConstructor = {
    new (s: string, a: number): constructorTst;
};
function fn(ctor: someConstructor) {
    return new ctor("mg kaung", 20);
}
console.log(fn(constructorTst));

interface callOrConstruct {
    new (s: string): Date;
    (n?: number): string;
}
const showDate = (ctor: callOrConstruct) => {
    return  ctor();
};
console.log(showDate(Date));

//practice
//normal function
type GreetFuncShape = (a: string) => void;
function greetFunc(fn: GreetFuncShape) {
    fn("hello from practice");
}
const introFunc = (txt: string) => console.log(txt);
greetFunc(introFunc);
//nested function
function nestedFunc(x: number) {
    return function (y: number): number {
        return x * y;
    };
}
const multiplyWithTwo = nestedFunc(2);
multiplyWithTwo(4);
