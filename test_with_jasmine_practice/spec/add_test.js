var add = require("../main_js/add");

describe("add funtion for two numbers", function () {
  var sum1 = 3;
  var sum2 = 3.2;

  it("两个整数相加", function () {
    var result = add(1, 2);
    expect(result).toEqual(sum1);
  });

  it("两个浮点数相加", function () {
    var result = add(1.1, 2.1);
    expect(result).toEqual(sum2);
  });
});