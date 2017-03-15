//var input = "6\n1 4 3 5 6 2"
var input = "9\n9 8 6 7 3 5 4 1 2"
// 8 9 6 7 3 5 4 1 2
// 6 8 9 7 3 5 4 1 2
// 6 7 8 9 3 5 4 1 2
// 3 6 7 8 9 5 4 1 2
// 3 5 6 7 8 9 4 1 2
// 3 4 5 6 7 8 9 1 2
// 1 3 4 5 6 7 8 9 2
// 1 2 3 4 5 6 7 8 9
input = input.split('\n')
var s = input.shift()
s = parseInt(s)
var arr = input[0].split(' ')
//console.log(arr)
arr = arr.map(item => parseInt(item))
var temp1 = 0;
var temp2 = 0;
//console.log(arr)

for (var i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    temp1 = arr[i + 1];
    //temp2 = arr[i]
    arr.splice(i + 1, 1);
    for (var j = 0; j < arr.length; j++) {
      if (temp1 < arr[j]) {
        arr.splice(j, 0, temp1);
        console.log(arr.join(' '));
        break;
      } else if (temp1 > arr[j] && temp1 < arr[j + 1]) {
        arr.splice(j + 1, 0, temp1);
        console.log(arr.join(' '));
        break;
      }
    }
  } else {
    console.log(arr.join(' '));
  }
}
