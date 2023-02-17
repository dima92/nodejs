const start = performance.now();
setTimeout(() => {
  console.log("Прошла секунда");
  console.log(performance.now() - start);
}, 1000);

function myFunc(arg) {
  console.log(`Аргумент => ${arg}`);
}

setTimeout(myFunc, 1500, "Классный");

const timerId = setTimeout(() => {
  console.log("BOOM!");
}, 5000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log("Очищено!");
}, 1000);

const intervalId = setInterval(() => {
  console.log(performance.now());
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 3000);

console.log("Перед");

setImmediate(() => {
  console.log("После всего");
});

console.log("После");

const timerObj = setTimeout(() => {
  console.log("BOOM!");
}, 5000);

timerObj.unref();

setImmediate(() => {
  timerObj.ref();
});
