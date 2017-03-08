var input = "6\naaabbb\nab\nabc\nmnop\nxyyx\nxaxbbbxx"
//var input = "1\ndnqaurlplofnrtmh" //5
//var input = "1\nhhpddlnnsjfoyxpciioigvjqzfbpllssuj" //10
//var input = "1\nxulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj" //13
//var input = "1\nlbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad"
//15
//var input = "1\naujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb" //26
//var input = "1\nvxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy" //13
//var input = "1\ngqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv" //-1
//var input = "1\nxyyx"
var t = 0;
var strings = [];
t = input[0];
strings = input.split('\n')
strings.shift()

var s = "";
var sum1 = 0;
var sum2 = 0;
var arr1 = []
var arr2 = []
var str1 = "";
var str2 = "";
var temp = []
var obj1 = {}
var obj2 = {}
var obj = {}
var string = "";

//console.log("hello")
//s = "hhpddlnnsjfoyxpciioigvjqzfbpllssuj" //10
// var s = "xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj" //13
//s = "dnqaurlplofnrtmh" //5
// var s = "aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb" //26
// var s = "lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad" //15
// var s = "drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe" //-1
// var s = "ubulzt" //3
// var s = "vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy" //13
// var s = "xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa" //13
// var s = "gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv" //-1

// String.prototype.replaceAt = function(index, character) {
//     return this.substr(0, index) + character + this.substr(index + character.length);
// }

for (var i = 0; i < strings.length; i++) {
  s = strings[i]
  isAnagram(s)
}
//s = strings[0]
//isAnagram(s)
function isAnagram(s) {
  var sumObj1 = 0;
  var sumObj2 = 0;
  sumObj1 = 0
  sumObj2 = 0
  str1 = s.slice(0, s.length / 2)
  str2 = s.slice(s.length / 2, s.length)
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  //string = s.split('').sort().join('')

  if (s.length % 2 !== 0) {
    return console.log("-1")
  }

  for (var i = 0; i < s.length/2; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1
    obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1
  }
  //console.log("obj1",obj1, "obj2",obj2)

  for (var i = 0; i < s.length/2; i++) {
    if (obj1.hasOwnProperty(str2[i])) {
      obj1[str2[i]]--
      if (obj1[str2[i]] === 0) {
        delete obj1[str2[i]]
      }
      //count--
    }
    if (obj2.hasOwnProperty(str1[i])) {
      obj2[str1[i]]--
      if (obj2[str1[i]] === 0) {
        delete obj2[str1[i]]
      }
      //count--
    }
  }
  //console.log("mod obj1",obj1, "mod obj2", obj2)

  for (key in obj1) {
    sumObj1 += obj1[key]
    delete obj1[key]
  }
  for (key in obj2) {
    sumObj2 += obj2[key]
    delete obj2[key]
  }

  if (sumObj1 === sumObj2) {
    var num = (sumObj1 + sumObj2) / 2
    return console.log(num)
  } else {
    return console.log("-1")
  }

  //console.log("sumObj1", sumObj1, "sumObj2", sumObj2)
  sumObj1 = 0
  sumObj2 = 0
}
