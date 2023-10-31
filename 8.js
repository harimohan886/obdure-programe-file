function younger(a, b, c) {
    if (a < b && a < c) {
        return "A is the youngest.";
    } else if (b < a && b < c) {
        return "B is the youngest.";
    } else if (c < a && c < b) {
        return "C is the youngest.";
    } else {
        return "Invalid input ";
    }
}

var a = 43;
var b = 34;
var c = 24;
var result = younger(a, b, c);
console.log(result);
