const sideInputs = document.getElementsByClassName("side-input");
const areaBtn = document.getElementById("area-btn");

const outputEl = document.getElementById("output");

const calculateArea = () => {
  const base = Number(sideInputs[0].value);
  const height = Number(sideInputs[1].value);

  const areaOfTriangle = 0.5 * base * height;
  outputEl.innerText = `Area of triangle is: ${areaOfTriangle}`;
};

areaBtn.addEventListener("click", calculateArea);
