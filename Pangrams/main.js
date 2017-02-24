var s = "We promptly judged antique ivory buckles for the next prize" //pangram
//var s = "We promptly judged antique ivory buckles for the prize" //not pangram
var count = 0;
var obj = {}
var alphabet = "abcdefghijklmnopqrstuvwxyz"

s = s.toLowerCase()

for (var i = 0; i < 26; i++) {
  obj[i] = alphabet[i]
}

for (key in obj) {
  count++
  if (s.search(obj[key]) !== -1) {
    if (count === 26) {
      console.log("pangram")
    }
  } else {
    console.log("not pangram")
    break;
  }
}
