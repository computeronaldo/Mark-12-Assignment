const sideInputs = document.getElementsByClassName("side-input");
const hypotenuseBtn = document.getElementById("hypotenuse-btn");

const outputEl = document.getElementById("output");

const calculateSumOfSquares = (a, b) => {
  return a * a + b * b;
};

const calculateHypotenuse = () => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sideInputs[0].value),
    Number(sideInputs[1].value)
  );

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = `Length of hypotenuse is: ${lengthOfHypotenuse.toFixed(
    2
  )}`;
};

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
