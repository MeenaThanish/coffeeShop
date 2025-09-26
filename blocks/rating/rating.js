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
        highlightStars(val);
      });

      star.addEventListener("mouseout", () => {
        highlightStars(selectedRating);
      });

      star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);
        ratingText.textContent = `Rating: ${selectedRating}`;
        highlightStars(selectedRating);
      });
    });

    function highlightStars(rating) {
      starElements.forEach(star => {
        const val = parseInt(star.dataset.value);
        star.style.color = val <= rating ? "gold" : "#ccc";
      });
    }
  }
});
