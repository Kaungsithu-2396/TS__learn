"use strict";
let pointA = {
    x: 4,
    y: 5,
    z: "minglar par",
};
console.log(pointA);
var showDirection;
(function (showDirection) {
    showDirection[showDirection["left"] = 1] = "left";
    showDirection[showDirection["right"] = 2] = "right";
    showDirection[showDirection["top"] = 3] = "top";
})(showDirection || (showDirection = {}));
console.log(showDirection.top);
