window.addEventListener("load", function () {
  const timelineBlock = document.querySelector(".timeline.block");
  if (!timelineBlock) return;

  const timelineItems = Array.from(timelineBlock.children);

  timelineItems.forEach((item, index) => {
    item.classList.add("container");
    if (index % 2 === 0) {
      item.classList.add("left-container");
    } else {
      item.classList.add("right-container");
    }
  });
