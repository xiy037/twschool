// const p = new Promise(function(resolve, reject) {
//   console.log("creating promise");
//   //Do some Async
//   setTimeout(function() {
//     console.log('执行完成'); //虽然不会再变状态，但是console这行还是可以执行。
//     resolve('数据');
//   }, 2000);
//   setTimeout(() => {
//     reject("错误");
//   }, 1000); //状态为rejected，不会再变；
// });

// p.then((val) => {
//   console.log("promise resolved: " + val);
// }, (err) => {
//   console.log("promise rejected: " + err);
// })

function runAsync1() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成1');
      resolve('数据1');
    }, 2000);
  });
  return p;
}

function runAsync2() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成2');
      resolve('数据2');
    }, 5000);
  });
  return p;
}

function runAsync3() {
  const p = new Promise(function (resolve, reject) {
    //Do some Async
    setTimeout(function () {
      console.log('执行完成3');
      resolve('数据3');
    }, 1000);
  });
  return p;
}

Promise.all([runAsync1(), runAsync2(), runAsync3()]).then(function (results) {
  console.log(results); //results是一个数组，按顺序存了三个promise的value。
});