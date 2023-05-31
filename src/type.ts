// let arr: Array<string> = ["1"];
// console.log(arr[1].toUpperCase());
function showTotal(a: number, b: number): number {
    return a + b;
}
showTotal(1, 2);
const nameArr: Array<string> = ["ko kaung", "ma mya", "kyaw gyee"];
nameArr.forEach((name) => {
    console.log(name.toUpperCase());
});
//object
let personA__data = { name: "mg kg" };
let personB_data = { name: "mg phyu", age: 20 };
function displayProperty(obj: { name: string; age?: number }) {
    if (obj.name && obj.age) {
        return `${obj.name} and age is ${obj.age}`;
    } else if (obj.name) {
        return obj.name;
    }
    return;
}

let mgkg = displayProperty(personA__data);
console.log(mgkg);
let fullData = displayProperty(personB_data);
console.log(fullData);

let obj = { name: "ko si " };
function display(obj: { name: string }) {
    console.log(obj.name);
}
display(obj);
display(display);
//uinon type
let color: "blue" | "green" | "red";
color = "blue";
let output: number | string;
output = color;
console.log(output);
