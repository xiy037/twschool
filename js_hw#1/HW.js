//找出数组中出现频率最多的元素
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var countedObj = a.reduce(function(prev, element){
  (element in prev) ? prev[element] += 1 : prev[element] = 1;
  return prev;
}, {});
var maxName, maxCount = 0;
a.forEach(function(element) {
  if (countedObj[element] > maxCount) {
    maxCount = countedObj[element];
    maxName = element;
  }
});
console.log(maxName);