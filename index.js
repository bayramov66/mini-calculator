                   //  1 ci sade usul

// const calcBtn = document.getElementById('calculate')
// const firstInput = document.getElementById('first')
// calcBtn.addEventListener('click', () => {
//     console.log(eval(firstInput.value))
// })


                //  daha genis usul

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


// ============ 2 ci usul

// calcBtn.addEventListener("click", () => {
//       let a = +firstInput.value;
//       let b = +secondInput.value;
//       let o = operator.value;
//       let res;
//       switch (o) {
//         case "+":
//           res = a + b;
//           break;
//         case "-":
//           res = a - b;
//           break;
//         case "*":
//           res = a * b;
//           break;
//         case "/":
//           res = a / b;
//           break;
//         default:
//           res = "Wrong operator...";
//       }
//       result.textContent = `${a} ${o} ${b} = ${res}`;
//     });