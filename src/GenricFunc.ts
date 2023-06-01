function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

// Usage example
const numbers = [1, 2, 3, 5];
const reversedNumbers = reverseArray<number>(numbers);
console.log(reversedNumbers);

const chechType = <T>(arg: T): string => {
    return typeof arg;
};
console.log(chechType(numbers));
//generic
type person<T> = {
    name: string;
    DOB: T;
};
let obj__: person<string> = {
    name: "mg kaung",
    DOB: "3",
};

//constratit generic ( restrict the type that can be genericed )
function largestArr<T extends { length: number }>(a: T, b: T) {
    if (a.length > b.length) {
        return a;
    }
    return b;
}

const firstCompare = largestArr([1, 2], [1, 4, 3]);
console.log(firstCompare);
