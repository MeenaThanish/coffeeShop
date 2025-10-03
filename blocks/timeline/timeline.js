<script>
  window.onload = function () {
    var timeline = document.querySelector(".timeline");
    if (!timeline) return;

    var childDivs = timeline.querySelectorAll("div");

    for (var i = 0; i < childDivs.length; i++) {
      // Check if the div is a direct child of .timeline
      if (childDivs[i].parentElement === timeline && i % 2 === 0) {
        childDivs[i].classList.add("container", "left-container");
      }
    }
  };
</script>
