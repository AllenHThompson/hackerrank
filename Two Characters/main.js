var len = 141
var s = 'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc'

var letterCount = {}
for(var i = 0; i < len; i++) {
    letterCount[s[i]] = letterCount[s[i]] ? letterCount[s[i]] + 1 : 1
}

var charArr = []
var combosArr = []
charArr = Object.keys(letterCount)


for (var j = 0; j < charArr.length; j++) {
  for (var k = charArr.length-1; k > j; k--) {
    combosArr.push(charArr[j] + charArr[k]);
  }
}

var count = 0;

for (var l = 0; l < combosArr.length; l++) {
  var re = new RegExp("[^'" + combosArr[l] + "']", "g")
  var str = s.replace(re, '');
  var goodCombo = true
    for (var m = 0; m < str.length - 1; m++) {
      if (str[m] === str[m + 1]) {
        goodCombo = false
        break
      }
    }
    if (goodCombo === true) {
      if (str.length > count ) {
        count = str.length
      }
    }
}
console.log(count)


  
