var input = "2\nhello\nworld\nhi\nworld"

input = input.split('\n')
var p = input.shift()
var a = "";
var b = "";
var strings = input

var obj1 = {};
var obj2 = {};

for (var i = 0; i < strings.length; i++) {
  if (i % 2 === 0) {
    a = strings[i];
    b = strings[i + 1]
    isSubstring(a, b)
  }
}

function isSubstring(a, b) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    obj1[a[i]] = obj1[a[i]] ? obj1[a[i]] + 1 : 1
  }

  for (var i = 0; i < b.length; i++) {
    obj2[b[i]] = obj2[b[i]] ? obj2[b[i]] + 1 : 1
  }

  if (a.length < b.length) {
    for (key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        count++
      }
    }
  } else {
    for (key in obj2) {
      if (obj1.hasOwnProperty(key)) {
        count++
      }
    }
  }

  for (key in obj1) {
    delete obj1[key]
  }
  for (key in obj2) {
    delete obj2[key]
  }

  if (count > 0) {
    console.log("YES")
  } else {
    console.log("NO")
  }
}
