<script>
  window.onload = function () {
    var timelineBlock = document.querySelector(".timeline.block");
    if (!timelineBlock) return;

    var timelineItems = timelineBlock.children;

    for (var i = 0; i < timelineItems.length; i++) {
      if (timelineItems[i].nodeType === 1 && i % 2 === 0) {
        timelineItems[i].classList.add("container", "left-container");
      }
    }
  };
</script>
