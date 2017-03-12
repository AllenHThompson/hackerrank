//var input = "5\n2 4 6 8 3"
var input = "14\n1 3 5 9 13 22 27 35 46 51 55 83 87 23"
// 1 3 5 9 13 22 27 35 46 51 55 83 87 87
// 1 3 5 9 13 22 27 35 46 51 55 83 83 87
// 1 3 5 9 13 22 27 35 46 51 55 55 83 87
// 1 3 5 9 13 22 27 35 46 51 51 55 83 87
// 1 3 5 9 13 22 27 35 46 46 51 55 83 87
// 1 3 5 9 13 22 27 35 35 46 51 55 83 87
// 1 3 5 9 13 22 27 27 35 46 51 55 83 87
// 1 3 5 9 13 22 23 27 35 46 51 55 83 87
//input = input.replace(/ /g, "").split('\n' && " ")
input = input.split('\n')
size = input.shift()
size = parseInt(size)
//console.log(input)
arr = input[0].split(' ')
// console.log("input", input)
// console.log("arr", arr)
// arr = input.pop()
// console.log("pop",arr)
// arr = input.split(' ')
// arr.map(item => parseInt(item))
// console.log(arr)

var e = arr[(size - 1)]

//input = input.split()
//console.log(e)
//console.log(arr)
var temp = 0;

// arr.splice(4, 1)
// console.log(arr)

for (var i = size - 1; i >= 0; i--) {
  //console.log(arr[i])
  if (arr[i - 1] > e) {
    temp = arr[i - 1]
    arr.splice(i, 1)
    arr.splice(i, 0, temp)
    console.log(arr.join(' '))
  } else {
    //arr.splice(i + 1, 1)
    //console.log("you're here")
    arr.splice(i, 1, e)
    console.log(arr.join(' '))
    break;
  }
}
