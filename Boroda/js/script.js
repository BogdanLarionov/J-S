// console.log(window.document.body.getElementsByClassName('child'));

const parent = window.document.getElementById("parent");
console.log(parent);

const arr = window.document.body.getElementsByClassName("child");
for (let i = 0; i < arr.length; i++) {
  //    console.log(arr[i]);
  console.log(arr[i].className);
  console.log(arr[i].id);
  console.log(arr[i].classList); // arr[i].className.split(" ")
}

// arr[0].classList.toggle("blue"); // включает выключает

// arr[0].addEventListener("click", function (evt) {
//     console.log('evt.target', evt.target);
//     console.log("I got clicked!");
//   });

window.addEventListener("click", function (evt) {
  evt.target.classList.toggle("blue"); // меняет цвет
  // console.log('evt.target', evt.target);
  // console.log("arr[0] got clicked!");
});

// window.addEventListener("click", function () {
//   console.log("I got clicked!");
// });

// При клику на child красить его в синий цвет.
//  если элемент уже покрашен в синий то позвращать тсходный цвет

// ['click', 'dblclick', 'mouseenter', 'mouseleave']

// parant.addEventListener("mouseenter", function (evt) {
//   console.log("mouse enter");
// });

// parent.addEventListener("mouseleave", function (evt) {
//   console.log("mouse leave");
// });

// при наведении на child красить его в синий. при покидании child убирать синий

// -----------


// при наведении на child красить его в <цвет>. при покидании child убирать <цвет>
// для первого child цвет - синий, для второго - чёрный, для третьего - коричневый
// при клике на child возвращать его оригинальный цвет и отменять все события 
// только на нём