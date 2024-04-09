/*Necessary variables*/
const specialBtn = document.querySelector(".btn-special");
const greenBtn = document.querySelector(".btn-green");
const redYellowBtn = document.querySelector(".btn-red-yellow");
const oddBtn = document.querySelector(".btn-odd");
const notBlackBtn = document.querySelector(".btn-not-black");
const turbulenceAllBtn = document.querySelector(".btn-turbulence-all");
const rotateAllBtn = document.querySelector(".btn-rotate-all");

/*Animate logic*/
var special = anime({
  targets: document.getElementById("special"),
  translateY: 250,
  autoplay: false,
});
var firstGreen = anime({
  targets: document.querySelector(".green"),
  translateY: 250,
  autoplay: false,
});
var redYellow = anime({
  targets: document.querySelectorAll(".red, .yellow"),
  translateY: 250,
  autoplay: false,
});
var odd = anime({
  targets: document.querySelectorAll(".square:nth-child(odd)"),
  translateY: 250,
  autoplay: false,
});
var notBlack = anime({
  targets: document.querySelectorAll(".square:not(.black)"),
  translateY: 250,
  autoplay: false,
});
var turbulenceAll = anime({
  targets: document.querySelectorAll(".square"),
  points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: "alternate",
  easing: "easeInOutExpo",
});
var rotateAll = anime({
  targets: document.querySelectorAll(".square"),
  rotateY: "360",
  easing: "linear",
  loop: true,
  duration: 800,
  autoplay: false,
});

/*Hook Up Event Listeners*/
specialBtn.addEventListener("click", special);
greenBtn.addEventListener("click", firstGreen);
redYellowBtn.addEventListener("click", redYellow);
oddBtn.addEventListener("click", odd);
notBlackBtn.addEventListener("click", notBlack);
rotateAllBtn.addEventListener("click", rotateAll);
