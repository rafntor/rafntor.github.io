const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container");

const drag = (e) => {
  let xPos = e.layerX;
  if (e.targetTouches) {
    console.log(e.targetTouches[0].clientX);
    xPos = e.targetTouches[0].clientX - 50;
  }

  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";
  e.preventDefault();
};

container.addEventListener("mousemove", drag);
container.addEventListener("touchmove", drag);
