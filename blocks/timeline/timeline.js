<script>
  window.onload = function () {
    var timelineBlock = document.querySelector(".timeline.block");
    if (!timelineBlock) return;

    var timelineItems = timelineBlock.querySelectorAll(":scope > div");

    for (var i = 0; i < timelineItems.length; i++) {
      if (i % 2 === 0) { // odd-numbered in human terms
        timelineItems[i].classList.add("container", "left-container");
      }
    }
  };
</script>
