setTimeout(() => {
  console.log("我是第一个宏任务");
  Promise.resolve().then(() => {
    console.log("我是第一个宏任务里的第一个微任务");
  });
  Promise.resolve().then(() => {
    console.log("我是第一个宏任务的第二个微任务");
  })
}, 1000);

setTimeout(() => {
  console.log("我是第二个宏任务");
}, 0);

Promise.resolve().then(() => {
  console.log("我是第一个微任务");
});

console.log("执行同步任务");