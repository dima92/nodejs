const { log } = require("console");
const fs = require("fs");

console.log("Init");

setTimeout(() => {
  console.log(performance.now(), "Timer 0");
}, 0);

setImmediate(() => {
  console.log("immediate");
});

fs.readFile(__filename, () => {
  console.log("file readed");
  setTimeout(() => {
    console.log("Timeout file");
  }, 1000);
});

setTimeout(() => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum++;
  }
}, 100);

setTimeout(() => {
  console.log(performance.now(), "Timeout 1000");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => console.log("Tick"));

console.log("Final");
