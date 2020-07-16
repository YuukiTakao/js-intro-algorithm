process.stdin.resume();
process.stdin.setEncoding('utf8');


var a = [1, 2, 4, 5, 10]

var searchValue = 1

var index = -1

var leftIndex = 0
var rightIndex = a.length - 1

while (leftIndex <= rightIndex) {
  middle = Math.floor((leftIndex + rightIndex) / 2)

  if (a[middle] === searchValue) {
    index = middle
    break
  } else if (a[middle] < searchValue) {
    leftIndex = middle + 1
  } else {
    rightIndex = middle - 1
  }
}

console.log(a[index])