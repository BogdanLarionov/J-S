// Задачи
// 1. Найти пораграф с текстом 'Важный текст' и заменить его на 'Не такой уж и важный текст'

const replace = document.querySelector(".main p");
console.log(replace);
replace.innerText = "He такой уж и важный текст";

// 2. Заменить fb на faceboock

const replace_fb = document.querySelector(".media .fb a");
console.log(replace_fb);
replace_fb.innerText = "faceboock";

// По нажатию на point_1 должно писаться Пункт_1 в место ***,
// Пункт_2 и Пункт_3 тожесамое
// Повесить 3 addEventListener на элементы

// chaenge_word.addEventListener("click",() => chaenge_word.innerText = "Пункт_1"); - короткая запись

const chaenge_word = document.querySelector(".menu .point_1");
chaenge_word.addEventListener("click", () => {
  chaenge_word.innerText = "Пункт_1";
});

const chaenge_word_2 = document.querySelector(".menu .point_2");
chaenge_word_2.addEventListener("click", () => {
  chaenge_word_2.innerText = "Пункт_2";
});

const chaenge_word_3 = document.querySelector(".menu .point_3");
chaenge_word_3.addEventListener("click", () => {
  chaenge_word_3.innerText = "Пункт_3";
});
