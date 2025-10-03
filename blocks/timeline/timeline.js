
  window.onload = function () {
    var timelineBlock = document.querySelector(".timeline");
    if (!timelineBlock) return;

    var timelineItems = timelineBlock.querySelectorAll(":scope > div");

    for (var i = 0; i < timelineItems.length; i++) {
      if (i % 2 === 0) { // odd-numbered in human terms
        timelineItems[i].classList.add("container", "left-container");

        // Create and append the span
        var arrowSpan = document.createElement("span");
        arrowSpan.className = "left-conatiner-arrow";
        timelineItems[i].appendChild(arrowSpan);
      }
    }
  };
</script>
