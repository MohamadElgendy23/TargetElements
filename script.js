/*Necessary variables*/
const specialBtn = document.querySelector(".btn-special");
const greenBtn = document.querySelector(".btn-green");
const redYellowBtn = document.querySelector(".btn-red-yellow");
const oddBtn = document.querySelector(".btn-odd");
const notBlackBtn = document.querySelector(".btn-not-black");
const customAllBtn = document.querySelector(".btn-custom-all");
const rotateAllBtn = document.querySelector(".btn-rotate-all");
const resetBtn = document.querySelector(".btn-reset");

const originalElementsContainer = document.querySelector(
  ".elements-container"
).innerHTML;
const originalControlsContainer = document.querySelector(
  ".controls-container"
).innerHTML;

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
var rotateAll = anime({
  targets: document.querySelectorAll(".square"),
  rotate: 360,
  easing: "linear",
  loop: true,
  duration: 2000,
  autoplay: false,
});
var changeColorsAll = anime({
  targets: document.querySelectorAll(".square"),
  rotate: 360,
  easing: "linear",
  loop: true,
  duration: 2000,
  autoplay: false,
});
var customAll = anime({
  targets: document.querySelectorAll(".square"),
  translateY: 250,
  rotate: function () {
    return anime.random(-360, 330);
  },
  direction: "alternate",
  loop: true,
  duration: 1900,
  restart: function (el, i, total) {
    return function (t) {
      return Math.pow(Math.sin(t * (i + 2.5)), total);
    };
  },
  autoplay: false,
});

/*Hook Up On Click For Buttons*/
specialBtn.onclick = special.restart;
greenBtn.onclick = firstGreen.restart;
redYellowBtn.onclick = redYellow.restart;
oddBtn.onclick = odd.restart;
notBlackBtn.onclick = notBlack.restart;
customAllBtn.onclick = customAll.restart;
rotateAllBtn.onclick = rotateAll.restart;
