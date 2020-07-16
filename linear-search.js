process.stdin.resume();
process.stdin.setEncoding('utf8');


var a = [1, 3, 10, 2, 8]

var searchValue = 2;

var index = -1

for (var i = 0; i < a.length; i++) {
  if (a[i] === searchValue) {
    index = i
    break
  }
}

console.log(a[index])