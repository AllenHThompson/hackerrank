var n = 16
var k = 66
var s = "Pz-/aI/J`EvfthGH"

// var n = 11;
// var s = "middle-Outz";
// var k = 2;

// var n = 10;
// var s = "www.abc.xy";
// var k = 87;

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = alphabet.length;
var lenHalf = alphabet.length / 2;
var arr = [];
var idx = 0;

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
}

for (var i = 0; i < alphabet.length; i++) {
  arr.push(alphabet[i]);
}

for (var i = 0; i < n; i++) {
  if (arr.indexOf(s[i]) !== -1) {
   idx = Math.round((k / lenHalf - Math.trunc(k / lenHalf)) * lenHalf + arr.indexOf(s[i]));
   if (arr.indexOf(s[i]) < lenHalf && idx < lenHalf) {
      s = s.replaceAt(i, arr[idx]);
    } else if (arr.indexOf(s[i]) < lenHalf && idx >= lenHalf) {
      s = s.replaceAt(i, arr[idx - lenHalf]);
    } else if (arr.indexOf(s[i]) >= lenHalf && idx < len) {
      s = s.replaceAt(i, arr[idx]);
    } else if (arr.indexOf(s[i]) >= lenHalf && idx >= len) {
      s = s.replaceAt(i, arr[idx - lenHalf]);
    }
  }
}
console.log(s);
