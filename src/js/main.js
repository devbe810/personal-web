import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#typedJs", {
  strings: ["My passion is to be a digital product developer."],
  typeSpeed: 50,
  loop: true,
});

const typed2 = new Typed("#typedJs2", {
  strings: ["Currently, I'm learning modern webstack."],
  typeSpeed: 50,
  loop: true,
});

const typed3 = new Typed("#typedJs3", {
  strings: ["Please Wait.."],
  typeSpeed: 60,
  loop: true,
});

const loadingjs = document.getElementById("loadingjs");
let counter = document.querySelector("loadingjs");
let count = 1;
setInterval(() => {
  counter.innerText = count;
  count++;

  if (count > 1) location.replace("/index.html");
}, 100);
const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;
const confettiBtn = document.getElementById("confettiBtn");
document.body.append(myCanvas);
confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.1,
    },
  });
});
