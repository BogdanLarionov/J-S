// Дан массив

let Array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// 1. Сформируйте новый  массив с числами меньше 100. Придложите два способа решения (цикл for и метод .forEach)
// -------------------------------------------------------------------------------------------------------------
// 1.
const array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

const getArr = (arr) => {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 100) {
      new_array.push(array[i]);
    }
  }
  return new_array;
};
console.log(getArr()); //  [ 45, 65, 32, 1, 0, 7 ]
// ------------------------------------------
// 2.
let age2 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
newArra = [];
age2.forEach((el) => {
  if (el <= 100) {
    newArra.push(el);
  }
});
console.log(newArra); // [ 45, 65, 32, 1, 0, 7 ]
// ------------------------------------------
// 3.
const age3 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
const newArra = [];

for (let i = 0; i < age3.length; i++) {
  if (age3[i] < 100) {
    newArra.push(age3[i]);
  }
}

console.log(age3); // [ 200, 45, 65, 670, 352, 32, 1, 0, 7];
console.log(newArra); // [ 45, 65, 32, 1, 0, 7 ]
// ------------------------------------------
// 4.
// Method -  .filter()
let array_fil = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr_filter = array_fil.filter((el) => {
  return el < 100;
});
console.log(new_arr_filter); // [ 45, 65, 32, 1, 0, 7 ]
// ------------------------------------------
// 2. Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach)
// 1.
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let newArr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && array[i] !== 0) {
    newArr.push(array[i]);
  }
}
console.log(newArr); // [ 200, 670, 352, 32 ]
// ------------------------------------------
// 2.
let Arr = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let newArR = [];

Arr.forEach((ell) => {
  if (ell % 2 === 0 && ell !== 0) {
    newArR.push(ell);
  }
});
console.log(newArR); // [ 200, 670, 352, 32 ]
// ------------------------------------------
// 3.
// Method -  .filter()
let arr_f = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr_f = arr_f.filter((el) => el % 2 === 0 && el !== 0);
console.log(new_arr_f); // [ 200, 670, 352, 32 ]

// ------------------------------------------
// 3. Сформируйте новый массив с числами, которые заканчиваются на 5. Предлодите два способа решения (цикл for и метод .forEach)
// 1.
let masiv = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr = [];
for (let i = 0; i < masiv.length; i++) {
  if (masiv[i] % 10 === 5) {
    new_arr.push(masiv[i]);
  }
}
console.log(new_arr); // [ 45, 65 ]
// ------------------------------------------
// 2.
let mosiv = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_Arr = [];
mosiv.forEach((el) => {
  if (el % 10 === 5) {
    new_Arr.push(el);
  }
});
console.log(new_Arr); // [ 45, 65 ]
// ------------------------------------------
// 3.
// Method -  .filter()
let arr_fi = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr_fi = arr_fi.filter((el) => el % 10 === 5);
console.log(new_arr_fi); // [ 45, 65 ]
// ------------------------------------------
// 4. Сформируйте массив, в котором числа больше 100 замены на строку '>100', а число меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach)
// 1.
let moosiv = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let arr_new = [];
for (let i = 0; i < moosiv.length; i++) {
  if (moosiv[i] >= 100) {
    arr_new.push(">100");
  } else {
    arr_new.push("<100");
  }
}
console.log(arr_new); // [ '>100', '<100', '<100', '>100', '>100', '<100', '<100', '<100', '<100' ]
// ------------------------------------------
// 2.
let maasiv = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_Array = [];
maasiv.forEach((el) => {
  if (el >= 100) {
    new_Array.push(">100");
  } else {
    new_Array.push("<100");
  }
});
console.log(new_Array); // [ '>100', '<100', '<100', '>100', '>100', '<100', '<100', '<100', '<100' ]
// ------------------------------------------
// 3.
let mov = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let newAr = [];
mov.forEach((ell) => newAr.push(ell % 2 === 0));
console.log(newAr); //  [ true,  false, false, true,  true,  true, false, true,  false ]
// ------------------------------------------
// 4.
let age9 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let age_changed9 = age9.map((el) => {
  if (el > 100) return (el = ">100");
  return (el = "<100");
});
console.log(age9); // [200, 45, 65, 670, 352, 32, 1, 0, 7];
console.log(age_changed9); // [ '>100', '<100', '<100', '>100', '>100', '<100', '<100', '<100', '<100' ]
// ------------------------------------------
// 5.
let age8 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let age_changed7 = age8.map((el) => (el < 100 ? (el = "<100") : (el = ">100"))); // (el >= 100 ? (el = ">100") : (el = "<100")));
console.log(age8); // [200, 45, 65, 670, 352, 32, 1, 0, 7];
console.log(age_changed7); // [ '>100', '<100', '<100', '>100', '>100', '<100', '<100', '<100', '<100' ]
// ------------------------------------------
// С if, else  Method -  .filter() не работает!!!!!!
// 5.
// Method -  .filter()
let arr_fil = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr_fil = arr_fil.filter((el) => {
  console.log(el); // 200, 45, 65, 670, 352, 32, 1, 0, 7
  return el % 2 === 0 && el !== 0;
});

console.log(new_arr_fil); // [ 45, 65 ]
