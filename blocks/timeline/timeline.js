
window.addEventListener("load", function () {
  const timelineBlocks = document.querySelectorAll(".timeline > div");

  timelineBlocks.forEach((block, index) => {
    if (index % 2 === 0) { // 0-based index: 0, 2, 4... are odd in human terms
      block.classList.add("container", "left-container");
    }
  });
});
