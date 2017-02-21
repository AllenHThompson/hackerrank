//see hackerrank
var n  = 6;
var k = 3;
var a = [ 1, 3, 2, 6, 1, 2 ];
//console.log(3 % 3)
var sum = 0;
var count = 0;

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    sum = a[i] + a[j + 1]
    if (sum % k === 0 && i < j + 1) {
      count++
      //console.log(s[i], s[j + 1], k)
    }
  }
}
console.log(count)
