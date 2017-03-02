//input delivered from 3rd party a number and 4 strings on 5 different lines.
var input = "4\nabc\nabcba\nabcd\ncba";

var t = 0;
var strings = [];
var string = "";

t = input[0];
strings = input.split('\n')
strings.shift()
//iterrate through array
for (var i = 0; i < strings.length; i++) {
  string = strings[i]
  calculatePalindrome(string);
}

function calculatePalindrome(str) {
  var temp = 0;
  var sum = 0;
  for (var i = 0; i < str.length / 2; i++) {
    //iterate through first and last letter moving toward middle
    //find letter utf-16 code and calculate difference and add sum
    sum = Math.abs(str[i].charCodeAt() - str[str.length - i - 1].charCodeAt())
    temp += sum
  }
  return console.log(temp)
}
