//var input = "aaabccddd" //"abd"
var input = "baab" //"Empty String"

for (var i = input.length; i > 0; i--) {
  if (input[i] === input[i - 1]) {
    var repl = input[i] + input[i - 1]
    input = input.replace(repl, "")
  }
}
if (input.length > 0) {
  console.log(input)
} else {
  console.log("Empty String")
}
