//var input = [2, "acxz", "bcxz"]
var input = [2, "ivvkxq", "ivvkx"]



var n = input[0]
var strArr = input.splice(1, input.length)
//console.log(strArr)
//console.log(input)
function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
//console.log(input)

function funnyNotFunny(s) {
  //console.log(s)
  //s = input[i];
  var r = reverseString(s);

  for (var i = 1; i < s.length; i++) {
    var numS = Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt())
    var numR = Math.abs(r[i].charCodeAt() - r[i - 1].charCodeAt())
    if (numS === numR) {
      if (i === s.length - 1) {
        console.log("Funny")
      }

    }else {
      console.log("Not Funny")
      break;
      }

  }
}
 //console.log(strArr)
for (var i = 0; i < n; i++) {
  //input.unshift();
  //console.log(i)
  funnyNotFunny(strArr[i])

}
//console.log(input[1])
