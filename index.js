const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

const isTriangle = () => {
  let sumOfAngles = 0;
  for (let i = 0; i < angleInputs.length; i++) {
    sumOfAngles += parseInt(angleInputs[i].value);
  }

  outputEl.innerHTML =
    sumOfAngles === 180
      ? "Yay! angles form a triangle"
      : "Oops! angles don't form a triangle";

  outputEl.classList.add("animated-text");
};

isTriangleBtn.addEventListener("click", isTriangle);
