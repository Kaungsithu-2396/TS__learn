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
type DescribableFunc = {
    description: string;
    (arg: number): boolean;
};
function doSmth(fn: DescribableFunc) {
    console.log`${fn.description} ${fn(4)}`;
}
const isEvan = (n: number) => n % 2 == 0;
isEvan.description = "isEvan called";
doSmth(isEvan);

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
