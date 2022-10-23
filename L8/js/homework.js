/* 
== / ===
!= / !==
 */

// 1. Напишите цикл for, который выводит число в консоль от 100 до 130

const getNumber = () => {
  for (let i = 100; i <= 130; i++) {
    console.log(i);
  }
};

getNumber(); // 100, 101... 129, 130

// ----------------

// 2. Напишите цикл for, который выводит число в консоль от 196 до 110 с шагом 3.

const getReversNumners = () => {
  for (let i = 196; i >= 110; i -= 3) {
    console.log(i);
  }
};

getReversNumners(); // 196, 193, 190 ... 115, 112
// -----------

// 3. Напишите цикл for, который выводит в консоль нечетные числа от 45 до 35.
const getOddNumbers_1 = () => {
  for (let i = 45; i >= 35; i--) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
getOddNumbers_1(); // 45, 43, 41, 39, 37, 35
// -----------
const getOddNumbers_2 = () => {
  for (let i = 45; i >= 35; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
getOddNumbers_2(); // 45, 43, 41, 39, 37, 35
// -----------
const getOddNumbers_3 = () => {
  for (let i = 45; i >= 35; i -= 2) {
    console.log(i);
  }
};

getOddNumbers_3(); // 45, 43, 41, 39, 37, 35
// -----------

// В программе заданы две переменные n и m с числовым значением каждая.
// Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумма нечетных).

const getSum = (n, m) => {
  let sum_even = 0;
  let sum_odd = 0;
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sum_even += i;
    } else {
      sum_odd += i;
    }
  }
  console.log(sum_even);
  console.log(sum_odd);
};

getSum(6, 10);

// -----------------

// -----------
// В программе задана переменная n.
// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.

const get_Sum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(get_Sum(5));  // 15




