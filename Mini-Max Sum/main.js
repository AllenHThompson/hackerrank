var arr = [1, 2, 3, 4, 5];
var arrTemp = [];
var a = [];
var arrMinMax = []
var min = 0;
var max = 0;
var sum = 0;

for (var i = 0; i < arr.length; i++) {
  a = arr.slice(0, arr.length)
  val = arr.pop()
  arr.splice(0, 0, val)
  for (var k = 0; k < 4; k++ ){
    sum += a[k]

  }

  arrMinMax.push(sum)

  sum = 0;

  min = Math.min.apply(null, arrMinMax)
  max = Math.max.apply(null, arrMinMax)


}

console.log(min + " " + max)
    
