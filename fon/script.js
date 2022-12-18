const buttonBlack = document.querySelector(".button_black");

buttonBlack.style.backgroundColor = "green";
const getRandomNum = () => Math.round(Math.random() * 255);

buttonBlack.addEventListener("click", () => {
  const backgroundColor =
    (document.body.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);
  // document.body.style.backgroundColor === "black" ? "white" : "black";
  document.body.style.backgroundColor = backgroundColor;
  console.log(buttonBlack);

  const timeElem = document.createElement("p");
  timeElem.innerText = "hello";
  timeElem.style.color = "black";
  timeElem.style.fontSize = "200px";
  console.log(timeElem);
});
