window.addEventListener("load", function () {
  const timelineBlock = document.querySelector(".timeline.block");
  if (!timelineBlock) return;

  const childDivs = timelineBlock.querySelectorAll(":scope > div");

  childDivs.forEach((div, index) => {
    if (index % 2 === 0) { // odd in human terms (1st, 3rd, 5th...)
      div.classList.add("container", "left-container");
    } else {
      div.classList.add("container", "right-container");
    }
  });
});
