const createAPromise = () => {
  const p = new Promise((resolve, reject) => {
    console.log("creating a promise");
    setTimeout(() => {
      console.log("after 2s");
      resolve("new Promise is resolved");
    }, 2000);
  });
  return p;
}

Promise.resolve("data1").then((val1) => {
  console.log(val1);
}).then((val2) => {
  console.log(val2);
  return Promise.resolve("another promise's data2");
}).then((val3) => {
  console.log("outside val3: " + val3)
  setTimeout((val3) => {
    console.log("inside timeout val3: " + val3);
  }, 1000);
}).then(
  createAPromise
).then((val4) => {
  console.log(val4);
})