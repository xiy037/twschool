//找出数组中出现频率最多的元素
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var noRepeatArr = listNoRepeatItem(a);
var initialCount = noRepeatArr.reduce(function (prev, element) {
  prev.push(0);
  return prev;
}, []);
var counted = countItemAppearance(a, noRepeatArr, initialCount);
var maxIndex = getLargestValIndex(counted);
var result = noRepeatArr[maxIndex];
console.log(result);

function listNoRepeatItem(array) {
  return array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
}
function countItemAppearance(array, noRepeatArr, initialVal) {
  return array.reduce(function (prev, curr) {
    for (var i = 0; i < noRepeatArr.length; i++) {
      if (curr === noRepeatArr[i]) {
        prev[i] = prev[i] + 1;
        return prev;
      }
    }
  }, initialVal);
}
function getLargestValIndex(array) {
  var max = Math.max.apply(null, array);
  return array.reduce(function(prev, element, index){
    if (element === max) {
      return index;
    }
    return prev;
  }, 0);
}