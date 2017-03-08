//var input = "cde\nabc" //4
var input ="fcrxzwscanmligyxyvym\njxwtrhvujlmrpdoqbisbwhmgpmeoke" //30



strings = input.split('\n');
var a = strings[0];
var b = strings[1];

var obj1 = {};
var obj2 = {};
var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < a.length; i++) {
  obj1[a[i]] = obj1[a[i]] ? obj1[a[i]] + 1 : 1
}
for (var i = 0; i < b.length; i++) {
  obj2[b[i]] = obj2[b[i]] ? obj2[b[i]] + 1 : 1
}
//console.log(obj1, obj2)
for (var i = 0; i < a.length; i++) {
  if (obj2.hasOwnProperty(a[i])) {
    obj2[a[i]]--
    if (obj2[a[i]] === 0) {
      delete obj2[a[i]]
    }
  }
}

for (var i = 0; i < b.length; i++) {
  if (obj1.hasOwnProperty(b[i])) {
    obj1[b[i]]--
    if (obj1[b[i]] === 0) {
      delete obj1[b[i]]
    }
  }
}

for (key in obj1) {
  sum1 += obj1[key]
}
for (key in obj2) {
  sum2 += obj2[key]
}
console.log(sum1 + sum2)
