var h = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5';
//var h = '1 3 1'
h = h.split(' ');
h = h.map(Number);
var alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.split('');

var word = 'abc';




var obj = {};
for (var i = 0; i < 26; i++) {
  obj[alphabet[i]] = h[i]
}

word = word.split('')
var temp = []
var tallest = 0;
for (var j = 0; j < word.length; j++) {
  if (obj.hasOwnProperty(word[j])) {
    temp.push(obj[word[j]])
    tallest = Math.max.apply(null, temp)
  }
}

console.log(tallest * 1 * word.length)
