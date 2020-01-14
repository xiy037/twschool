function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const light = function(timmer, color) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      color();
      resolve();
    }, timmer);
  });
};

const step = function() {
  Promise.resolve()
    .then(function() {
      console.log("set red light")
      return light(3000, red);
    })
    .then(function() {
      console.log("set green light")
      return light(2000, green);
    })
    .then(function() {
      console.log("set yellow light")
      return light(1000, yellow);  //不加return和加return都跑一下。
    })
    // .then(function() {
    //   step();
    // });
};

step();