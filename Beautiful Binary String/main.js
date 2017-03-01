var n = 7; //string length
var B = "0101010"//input string
B = B.replace(/010/g, "")//search string for "010" using regular expression, replace with ""
/*check difference in lengths of before and after string if both lengths are 0 no changes required, otherwise divide difference of stings by 3 (length of target "010") to return the number of changes*/
if (n - B.length === 0) {
  console.log(0)
} else {
  console.log((n - B.length) / 3)
}
