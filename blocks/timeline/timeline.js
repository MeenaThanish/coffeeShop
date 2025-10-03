
  window.onload = function () {
    var timeline = document.querySelector(".timeline");
    if (!timeline) return;

    var childDivs = timeline.children;

    for (var i = 0; i < childDivs.length; i++) {
      if (i % 2 === 0) { // odd in human terms: 1st, 3rd, 5th...
        childDivs[i].classList.add("container", "left-container");
      }
    }
  };
