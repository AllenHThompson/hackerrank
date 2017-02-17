var s = 7; //house position start
var t = 11; //house position end
var a = 5; //position of apple tree
var b = 15; //position of orage tree
var m = 3; //number of apples that fall
var n = 2; //number of oranges that fall
var apple = [-2, 2, 1]; //distance respective apples fall from tree
var orange = [5, -6]; //distance respective oranges fall from tree
var countApple = 0;
var countOrange = 0;

for (var i = 0; i < apple.length; i++) {
  if ((apple[i] + a) >= s && (apple[i] + a) <= t) {
    countApple++
    console.log("apple hit")
  }
}

for (var j = 0; j < orange.length; j++) {
  if ((orange[j] + b) >= s && (orange[j] + b) <= t) {
    countOrange++
    console.log("orange hit")
  }
}

console.log(countApple)
console.log(countOrange)
