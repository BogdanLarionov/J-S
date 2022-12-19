// Промисы - Promise
// https://learn.javascript.ru/promise

// ---------------------------------
// Синхроннасть;
let a = 10;
a = 34;
console.log(a);

// Асинхроннасть;
let b = 15;
setTimeout(() => {
  b = 37;
  console.log(b); // c зажержкой 37
}, 2000); // милисикунды
console.log(b); // без задержки 15
// ---------------------------------

// new Promise((resolve, reject));

let i = 10;
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve((i = 34));
  }, 4000);
});
promise.then(() => console.log(i));

// ---------------------------------

const rendom_num = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    resolve();
  } else {
    reject();
  }
});

rendom_num.then(
  () => console.log(" >= 0.5"),
  () => console.log("< 0.5")
);
