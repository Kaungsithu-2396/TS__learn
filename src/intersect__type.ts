type circleBasic = {
    color: string;
    radius: number;
};
type additionalCircle = {
    author: string;
};
type circleObj = circleBasic & additionalCircle;
const obj_2: circleObj = {
    color: "green",
    author: "mg kaung",
    radius: 12,
};
