document.addEventListener("DOMContentLoaded", function () {
    const tooltipBlock = document.querySelector('.tooltip.block');
  
    if (tooltipBlock) {
      const pairs = tooltipBlock.querySelectorAll(':scope > div');
  
      pairs.forEach(pair => {
        const children = pair.querySelectorAll(':scope > div');
        if (children.length >= 2) {
          children[0].classList.add('tooltip-title');
          children[1].classList.add('tooltip-description');
        }
      });
    }
  });
