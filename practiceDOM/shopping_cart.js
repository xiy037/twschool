//将JSON的内容转换为商品列表
//把列表内容输入DOM，用循环输入数组的每个obj
//数量按钮加减，显示数量加减
//根据数量和单价计算价格
//求和，把选中框那行的数量和价格相加--特例：全选框选中时所有框都变为选中
window.onload = addTable();

function addTable() {
  var table = document.getElementById("myTable");
  addFormattedRows(table);
  for (var i = 0; i < listAllItems().length; i++) {
    calculateRowPrice(i);
  }
  table.onclick = function (event) {
    var target = event.target;
    var i = target.id.split("-")[0];
    var btnType = target.type;
    if (btnType === "button") {
      changeCount(target);
      calculateRowPrice(i);
      addToSum();
    } else if (btnType === "checkbox") {
      if (target.id === "checkAll") {
        selectAllCheckbox();
      }
      addToSum();
    }
  };
}

function addFormattedRows(table) {
  var str = ``;
  for (var i = 0; i < listAllItems().length; i++) {
    var item = listAllItems()[i];
    str += `
    <tr class="row" id="${i}-row">
      <td><input type="checkbox" class="checkbox" id="${i}-checkbox"></td>
      <td id="${i}-name">${item.name}</td>
      <td id="${i}-price">${item.price}</td>
      <td>
        <input type="button" value="-" class="countBtn" id="${i}-minus">
        <span id="${i}-count">${item.count}</span>
        <input type="button" value="+" class="countBtn" id="${i}-plus">
      </td>
      <td id="${i}-total"></td>
    </tr>  `
  }
  str += `
  <tr class="row" id="endRow">
    <td>全选<input type="checkbox" id="checkAll"></td>
    <td colSpan=4 id="result"></td>
  </tr>`
  table.innerHTML += str;
}

function changeCount(target) {
  var i = target.id.split("-")[0];
  var countNum = document.getElementById(`${i}-count`).innerText;
  if (target.value === "-") {
    countNum--;
    if (countNum > 0) {
      document.getElementById(`${i}-count`).innerText = countNum;
    } else if (countNum === 0) {
      document.getElementById(`${i}-row`).style.display = "none";
    }    
  } else {
    countNum++;
    document.getElementById(`${i}-count`).innerText = countNum;
  }
}

function calculateRowPrice(i) {
    var count = document.getElementById(`${i}-count`).innerText;
    var price = document.getElementById(`${i}-price`).innerText;
    document.getElementById(`${i}-total`).innerText = count * price;
}

function selectAllCheckbox() {
  var checkAll = document.getElementById("checkAll");
  var allCheckBox = document.getElementsByClassName("checkbox");
  if (checkAll.checked === true) {
    for (var i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = true;
    }
  } else {
    for (var i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = false;
    }
  }
}

function addToSum() {
  var sum = {totalCount: 0, totalPrice: 0};
  var allCheckBox = document.getElementsByClassName("checkbox");
  console.log(allCheckBox.length);
  for (var j = 0; j < allCheckBox.length; j++) {
    var i = document.getElementsByClassName("checkbox")[j].id.split("-")[0];
    var count = document.getElementById(`${i}-count`).innerText;
    var price = document.getElementById(`${i}-total`).innerText;
    if (allCheckBox[j].checked === true) {
      sum.totalCount += Number(count);
      sum.totalPrice += Number(price);
  }
  document.getElementById("result").innerHTML = "共计" + sum.totalCount + "件商品，" + sum.totalPrice + "￥";
}
}

function listAllItems() {
  return [
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
}
