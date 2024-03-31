const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calculate");
calcBtn.addEventListener("click", () => {
  let a = +firstInput.value;
  let b = +secondInput.value;
  let o = operator.value;
  let res = a + b;
  if (o === "/") {
    res = a / b;
  } else if (o === "*") {
    res = a * b;
  } else if (o === "-") {
    res = a - b;
  }
  result.textContent = `${a} ${o} ${b} = ${res}`;
});
