const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const outputColor = document.getElementById("output-color");
const outputCode = document.getElementById("output-code");
const toast = document.querySelector(".toast");
const hexString = "0123456789abcdef";

function randomColor() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)]
  }
  return hexCode;
};

function generateColor() {
  const colorOne = randomColor();
  const colorTwo = randomColor();
  if (colorOne === colorTwo) {
    return generateColor();
  }
  return [colorOne, colorTwo];
};

function generateGradient() {
  const [colorOne, colorTwo] = generateColor();
  let angle = Math.floor(Math.random() * 360);
  const code = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`
  outputColor.style.background = code;
  outputCode.value = code;
};

function copyCode() {
  outputCode.select();
  document.execCommand("copy");
  toast.style.transform = "translateX(0)";
  setTimeout(() => toast.style.transform = "translateX( calc(100% + 10px) )", 2000);
}

window.onload = generateGradient;

generateButton.addEventListener("click", generateGradient);

copyButton.addEventListener("click", copyCode);
