// var n = 6;
// var k = 3;
// var number = "092282";
// var n = 3;
// var k = 0;
// var number = "777"
var n = 4
var k = 1
var number = "3943"
// var n = 1
// var k = 1
// var number = "5"

// var n = 5
// var k = 1
// var number = "12321"


//var number = "0011"
var chngObj = {};
var possiblePalindrome = true;

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
}

function palindrome() {
  if (n === 1) {
    if (k > 0) {
      console.log("9");
      return
    } else {
    console.log(number);
    }
  }

  for (var i = 0; i < n; i++) {
    chngObj[i] = false;
  }

  for (var i = 0; i < (n / 2); i++) {
    if (number[i] !== number[(n - 1) - i]) {
      if (k > 0) {
        if (number[i] > number[(n - 1) - i]) {
          number = number.replaceAt((n - 1) - i, number[i]);
          chngObj[(n - 1) - i] = true;
        } else {
          number = number.replaceAt(i, number[(n - 1) - i]);
          chngObj[i] = true;
        }
        k--;
      } else {
        possiblePalindrome = false
      }
    }
  }

  if (!possiblePalindrome) {
    console.log("-1")
  }

  for (var i = 0; i < n / 2; i++) {
    if (k === 0) {
      break;
    }
    if (number[i] !== "9") {
      if (chngObj[i] || chngObj[(n - 1) - i]) {
        number = number.replaceAt(i, "9");
        number = number.replaceAt((n - 1) - i, "9");
        k--;
      } else {
        if (k >= 2) {
          number = number.replaceAt(i, "9");
          number = number.replaceAt((n - 1) - i, "9");
          k-= 2;
        }
      }
    }
  }

  if (n % 2 === 1 && k >= 1) {
    number = number.replaceAt(n / 2, "9");
  }

  if (possiblePalindrome) {
    console.log(number)
  }
}
palindrome()
