const specialBtn = document.querySelector(".btn-special");
const greenBtn = document.querySelector(".btn-green");
const redYellowBtn = document.querySelector(".btn-red-yellow");
const oddBtn = document.querySelector(".btn-odd");
const nonBlackBtn = document.querySelector(".btn-non-black");
const spinBtn = document.querySelector(".btn-spin");

/*Animate logic*/
var special = anime({
  targets: document.getElementById("special"),
  translateY: 250,
});
var firstGreen = anime({
  targets: document.querySelector(".green"),
  translateY: 250,
});
var redYellow = anime({
  targets: document.querySelectorAll(".red, .yellow"),
  translateY: 250,
});
var odd = anime({
  targets: document.querySelectorAll(".square:nth-child(odd)"),
  translateY: 250,
});
var notBlack = anime({
  targets: document.querySelectorAll(".square:not(.black)"),
  translateY: 250,
});

/*Add Event Listeners*/
specialBtn.addEventListener("click", special);
greenBtn.addEventListener("click", firstGreen);
redYellowBtn.addEventListener("click", redYellow);
oddBtn.addEventListener("click", odd);
nonBlackBtn.addEventListener("click", notBlack);
