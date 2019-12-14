//树形结构
var flatTest = [
  {id: 7,  name: '猪',  pid: 2},
  {id: 8,  name: '牛',  pid: 2},
  {id: 9,  name: '羊',  pid: 2},
  {id: 13,  name: '三黄鸡',  pid: 4},
  {id: 14,  name: '白羽鸡',  pid: 4},
  {id: 15,  name: '火鸡',  pid: 4},
  {id: 4,  name: '鸡',  pid: 1},
  {id: 5,  name: '鸭',  pid: 1},
  {id: 6,  name: '鹅',  pid: 1},
  {id: 10,  name: '粟',  pid: 3},
  {id: 11, name: '稻',  pid: 3},
  {id: 12, name: '黍',  pid: 3},
  {id: 1,  name: '禽'},
  {id: 2,  name: '兽'},
  {id: 3,  name: '谷'}   
];      
//先filter生成爸爸obj数组tempArray，包含禽兽谷
//再用reduce，看每一个curr.pid, push到相应的children里
var parentNode = ["禽", "兽", "谷"]
var firstLayer = flatTest.filter(function (element) {
  return parentNode.includes(element.name);
});
for (var i = 0; i < firstLayer.length; i++) {
  firstLayer[i].children = [];
}

var secondLayer = flatTest.reduce(function (prev, curr) {
  if (curr.name === "鸡") {
    curr.children = [];
  }
  for (var i = 0; i < prev.length; i++) {
    if (curr.pid === i + 1) {
      prev[i].children.push(curr);
    }
  }
  return prev;
}, firstLayer);

var thirdLayer = flatTest.reduce(function (prev, curr) {
  if (curr.pid === 4) {
    prev[0].children[0].children.push(curr);
  }
  return prev;
}, secondLayer);
console.log(thirdLayer);