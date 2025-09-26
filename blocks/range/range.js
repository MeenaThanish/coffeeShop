window.onload = function () {
    const slider = document.getElementById('rangeSlider');
    const valueDisplay = document.getElementById('rangeValue');

    // Update the displayed value when the slider changes
    slider.addEventListener('input', function () {
        valueDisplay.textContent = slider.value;
    });
};
