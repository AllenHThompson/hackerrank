//var s = "SOSSPSSQSSOR";
var S = "SOSSOT"
var count = 0;
var arr1 = []
var arr2 = []
var arr3 = []
for (var i = 0; i < S.length; i++) {
  if (i % 3 === 0) {
    arr1.push(S.slice(i, i + 1))
    arr2.push(S.slice(i + 1, i + 2))
    arr3.push(S.slice(i + 2, i + 3))
  }
}
arr1.map(function(char) {
  if (char !== "S") {
    count++
  }
})
arr2.map(function(char) {
  if (char !== "O") {
    count++
  }
})
arr3.map(function(char) {
  if (char !== "S") {
    count++
  }
})

console.log(count)
