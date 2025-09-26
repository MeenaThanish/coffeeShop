document.addEventListener("DOMContentLoaded", function () {
  const ratingBlock = document.querySelector(".rating.block");
  const starCode = ratingBlock?.querySelectorAll("p code")[0];
  const ratingText = ratingBlock?.querySelectorAll("p code")[1];

  if (starCode && ratingText) {
    const stars = starCode.textContent.trim().split(" ");
    let selectedRating = 0;

    // Replace text with span elements
    starCode.innerHTML = stars.map((_, i) => `<span class="star" data-value="${i + 1}">&#9733;</span>`).join(" ");

    const starElements = starCode.querySelectorAll(".star");

    starElements.forEach(star => {
      star.addEventListener("mouseover", () => {
        const val = parseInt(star.dataset.value);
        updateClasses(val, true);
      });

      star.addEventListener("mouseout", () => {
        updateClasses(selectedRating, false);
      });

      star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);
        ratingText.textContent = `Rating: ${selectedRating}`;
        updateClasses(selectedRating, false);
      });
    });

    function updateClasses(rating, isHovering) {
      starElements.forEach(star => {
        const val = parseInt(star.dataset.value);
        if (val <= rating) {
          star.classList.add("selected");
          if (isHovering) {
            star.classList.add("hover");
          } else {
            star.classList.remove("hover");
          }
        } else {
          star.classList.remove("selected");
          star.classList.remove("hover");
        }
      });
    }
  }
});
