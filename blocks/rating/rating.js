<script>
document.addEventListener("DOMContentLoaded", function () {
  const ratingBlock = document.querySelector(".rating.block");

  if (ratingBlock) {
    const starContainer = document.createElement("div");
    starContainer.className = "star-rating";

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.dataset.value = i;
      star.innerHTML = "&#9733;";
      starContainer.appendChild(star);
    }

    ratingBlock.appendChild(starContainer);

    const stars = starContainer.querySelectorAll(".star");
    let selectedRating = 0;

    stars.forEach(star => {
      star.addEventListener("mouseover", () => {
        const val = parseInt(star.dataset.value);
        highlightStars(val);
      });

      star.addEventListener("mouseout", () => {
        highlightStars(selectedRating);
      });

      star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);
        highlightStars(selectedRating);
        console.log("Selected Rating:", selectedRating);
      });
    });

    function highlightStars(rating) {
      stars.forEach(star => {
        const val = parseInt(star.dataset.value);
        star.classList.toggle("selected", val <= rating);
      });
    }
  }
});
