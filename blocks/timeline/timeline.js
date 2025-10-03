window.addEventListener("load", function () {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  const childDivs = Array.from(timeline.children);

  childDivs.forEach((div, index) => {
    if (index % 2 === 0) { // odd in human terms: 1st, 3rd, 5th...
      div.classList.add("container", "left-container");
    }
  });
});
