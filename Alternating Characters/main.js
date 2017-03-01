//var input = "5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB" //"3, 4, 0, 0, 4"

var input = "10\nABABBABAAB\nBABAABBAAB\nAAAABBAAAA\nBABBABABBA\nAABBBBAAAA\nBAAAABBBBB\nBBABAAAABB\nBBBAAABBAB\nBABAAABBBB\nAAAABAABBB" //"2, 3, 7, 2, 7, 7, 5, 5, 5, 6"

var data;
var t;
data = input.split('\n');
t = parseInt(data[0]);
data = data.slice(1, data.length);

var str = ""
temp = ""

for (var i = 0; i < data.length; i++) {
  str = data[i]
  if (str[0] === "A") {
    temp = str.replace(/AB/g, "");
  } else if (str[0] === "B") {
    temp = str.replace(/BA/g, "");
  }

  if (str.length === temp.length) {
    console.log(str.length - 1)
  } else {
    if (str[0] === "A" && str[str.length - 1] === "A") {
      console.log(temp.length - 1)
    } else if (str[0] === "B" && str[str.length - 1] === "B") {
      console.log(temp.length - 1)
    } else {
      console.log(temp.length)
    }
  }
}
