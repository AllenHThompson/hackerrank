//var n = 2;
//var m = 3;
// var a = [2, 4];
// var b = [16, 32, 96];
var n = 3;
var m = 2;
var a = [1, 9, 6];
var b = [36, 72]
a.sort()
b.sort()

var low = a[n - 1]
var high = b[0]
var count = 0;
for (var i = low; i <= high; i++) {
  var sum = 0;
  for (var j = 0; j < n; j++){

    sum += i % a[j]
  }
  for (var k = 0; k < m; k++) {
    sum += b[k] % i;
  }
  if (sum === 0) {
    count++;
  }
}
console.log(count)
