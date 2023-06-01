class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
type constrShape = {
    new (n: string, age: number): Person;
};
function triggerPerson(fn: constrShape) {
    return new fn("mg kg", 12);
}
console.log(triggerPerson(Person));
