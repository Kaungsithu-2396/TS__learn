interface point {
    x: number;
    y: number;
}
interface extraPoint extends point {
    z: string;
}
let pointA: extraPoint = {
    x: 4,
    y: 5,
    z: "minglar par",
};
console.log(pointA);
enum showDirection {
    left = 1,
    right,
    top,
}
console.log(showDirection.top);
