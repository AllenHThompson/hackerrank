var input = "3\nabcdde\nbaccd\neeabg"
var data;
var n;
var rocks = [];
var obj = {};
data = input.split('\n');
n = parseInt(data[0]);
data.splice(0, 1);
rocks = data;
var key = "abcdefghijklmnopqrstuvwxyz"
var temp = []
var str = ""
var count = 0;
for (var i = 0; i < key.length; i++) {
  for (var j = 0; j < n; j++) {
    if (rocks[j].search(key[i]) >= 0) {
      obj[key[i]] = obj[key[i]] ? obj[key[i]] + 1 : 1
    }
  }
}

for (gem in obj) {
  if (obj[gem] === n) {
    count++
  }
}

console.log(count)
