interface accessWithBracket {
    [index: number]: string;
}
function getStrArr() {
    return ["hello", "world"];
}
const myArr: accessWithBracket = getStrArr();
console.log(myArr[1]);
