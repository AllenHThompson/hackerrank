//var input = "aaabbbb" //YES
//var input = "cdefghmnopqrstuvw" //NO
var input = "cdcdcdcdeeeef" //YES
var s = input
//console.log(s)

var obj = {}
var sumEven = 0
var sumOdd = 0;

for (var i = 0; i < s.length; i++) {
  obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
}
// console.log(s.length)
// console.log(obj)

for (key in obj) {
  if (obj[key] % 2 !== 0) {
    sumOdd++
  }
}

if (sumOdd > 1) {
  console.log("NO")
} else {
  console.log("YES")
}
