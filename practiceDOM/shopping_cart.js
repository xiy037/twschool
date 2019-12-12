//将JSON的内容转换为商品列表
//把列表内容输入DOM，用循环输入数组的每个obj
//数量按钮加减，显示数量加减
//根据数量和单价计算价格
//求和，把选中框那行的数量和价格相加
var table = document.getElementById("myTable");
for (var i = 0; i < listAllItems().length; i++) {
  var item = listAllItems()[i];
  var tableRow = document.createElement("tr");
  tableRow.className = "row";
  for (x in item) {
    var tableCell = document.createElement("td");
    tableRow.appendChild(tableCell);
  }
  tableRow.children[0].innerHTML = "<input type='checkbox' class='checkbox'>";
  tableRow.children[1].innerHTML = item.name;
  tableRow.children[2].innerHTML = item.price;
  tableRow.children[3].innerHTML = item.count;
  tableRow.children[4].innerHTML = calculatePrice(tableRow);
  var minus = document.createElement("input");
  minus.type = "button";
  minus.value = "-";
  minus.className = "countBtn";
  var plus = document.createElement("input");
  plus.type = "button";
  plus.value = "+";
  plus.className = "countBtn";
  tableRow.children[3].insertBefore(minus, tableRow.children[3].lastChild);
  tableRow.children[3].appendChild(plus);
  table.appendChild(tableRow);
}
var endRow = document.createElement("tr");
var checkAllCell = document.createElement("td");
endRow.className = "row";
checkAllCell.innerHTML = "全选<input type='checkbox'>";
endRow.appendChild(checkAllCell);
var sumCell = document.createElement("td");
sumCell.colSpan = 4;
sumCell.id = "result";
sumCell.innerHTML = "";
endRow.appendChild(sumCell);
table.appendChild(endRow);
table.onclick = function (event) {
  var target = event.target;
  var btnType = target.type;
  var targetRow = target.parentNode.parentNode;
  if (btnType === "button") {
    changeCount(target);
    targetRow.children[4].innerHTML = calculatePrice(targetRow);
    addToSum();
  } else if (btnType === "checkbox") {
    addToSum();
  }
};



function changeCount(target) {
  var countNum = target.parentNode.childNodes[1].nodeValue;
  if (target.value === "-") {
    countNum--;
    if (countNum >= 0) {
      target.parentNode.childNodes[1].nodeValue = countNum;
    }    
  } else {
    countNum++;
    target.parentNode.childNodes[1].nodeValue = countNum;
  }
}
function calculatePrice(rowNode) {
  return rowNode.children[2].innerText * rowNode.children[3].innerText;
}
function addToSum() {
  var sum = {totalCount: 0, totalPrice: 0};
  var allCheckBox = document.getElementsByClassName("checkbox");
  for (var i = 0; i < allCheckBox.length; i++) {
    if (allCheckBox[i].checked === true) {
      sum.totalCount += Number(allCheckBox[i].parentNode.parentNode.children[3].childNodes[1].nodeValue);
      sum.totalPrice += Number(allCheckBox[i].parentNode.parentNode.children[4].innerHTML);
  }
  sumCell.innerHTML = "共计" + sum.totalCount + "件商品，" + sum.totalPrice + "￥";
}
}


function listAllItems() {
  var carProducts = [
    {
      "id": 1,
      "name": "英雄牌 钢笔",
      "count": 1,
      "price": 69,
      "checked": false
    },
    {
      "id": 2,
      "name": "晨光牌 铅字笔",
      "count": 2,
      "price": 5.5,
      "checked": true
    },
    {
      "id": 3,
      "name": "晨光牌 铅笔",
      "count": 1,
      "price": 2,
      "checked": false
    },
    {
      "id": 4,
      "name": "狗熊牌 橡皮擦",
      "count": 1,
      "price": 1,
      "checked": false
    },
    {
      "id": 5,
      "name": "瑞士牌 双肩书包",
      "count": 1,
      "price": 199,
      "checked": true
    },
    {
      "id": 6,
      "name": "晨光牌 作业本",
      "count": 5,
      "price": 2.5,
      "checked": false
    }
  ];
  return carProducts;
}
