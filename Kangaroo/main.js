var x1 = 28;
var v1 = 8;
var x2 = 96;
var v2 = 2;

var arrX = [];
var objX = {}
var arrY = [];
var objY = {}
arrX.push(x1);
arrX.push(x1 + v1);
arrY.push(x2);
arrY.push(x2 + v2)
var arrXY = []
if (x2 > x1 && v2 > v1) {
  console.log("NO")
} else if (x1 > x2 && v1 > v2) {
  console.log("NO")
} else {
  for (var i = 1; i < 10000; i++) {
    arrX.push(arrX[i] + v1)
    objX[i] = arrX[i]
  }
  //console.log("objX", objX)
  for (var j = 1; j < 10000; j++) {
    arrY.push(arrY[j] + v2)
    objY[j] = arrY[j]
  }
  //console.log("objY", objY)

  for (var k = 1; k < 10000; k++) {
    if (objX[k.toString()] === objY[k.toString()]) {
      //console.log(objX[k.toString()])
      console.log("YES")
      break;
    } else if (k === 9999) {
      console.log("NO")
    }
  }
}
