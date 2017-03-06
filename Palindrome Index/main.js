//var input = "3\naaab\nbaa\naaa";
/var input ="10\nquyjjdcgsvvsgcdjjyq\nhgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh\nfgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf\nbsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb\nfvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf\nmmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm\ntpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt\nprcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp\nkjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk"
var t = 0;
var strings = [];
t = input[0];
strings = input.split('\n')
strings.shift()
var s = "";

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + this.substr(index + character.length);
}
for (var i = 0; i < strings.length; i++) {
  s = strings[i];
  isPalindrome(s)
  makePalindrome(s)
}

function makePalindrome(str) {
  var j = (str.length - 1);
  var left = 0;
  var right = j;
  var palindrome = true;
  var one = str;
  var two = str;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) {
      palindrome = false;
      left = i;
      right = j;
      break;
    }
    j--;
  }

  if (!palindrome) {
    one = one.replaceAt(left, " ");
    two = two.replaceAt(right, " ");
    if (isPalindrome(one)) {
      return console.log(left);
    } else if (isPalindrome(two)) {
      return console.log(right);
    } else {
      return console.log("-1");
    }
  } return console.log("-1");
}

function isPalindrome(str) {
  var str1 = str;
  var str2 = str.split('').reverse().join('');
  if (str1 === str2) {
    return true
  } else {
    return false
  }
}
