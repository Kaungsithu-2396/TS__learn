type personInfo = {
    name: string;
    age: number;
};
type staffData = {
    name: string;
    age: number;
};
const personA: personInfo = {
    name: "mg kaung",
    age: 13,
};
//structural typing
//only if the structure of type is same, they can be equivalent with the rule of structural typing
const staffA: staffData = personA;

function displayInfo(obj: personInfo) {
    return obj.name + " " + obj.age;
}
let dataA = displayInfo(personA);
console.log(dataA);

let dataB = displayInfo(staffA);
console.log(dataB);
//type equivalent
type Point = {
    x: number;
    y: number;
};
type Point3D = {
    x: number;
    y: number;
    z: number;
};
let p: Point = {
    x: 2,
    y: 3,
};
let threeDPoint: Point3D = {
    x: 4,
    y: 5,
    z: 6,
};
p = threeDPoint;
console.log(p);
