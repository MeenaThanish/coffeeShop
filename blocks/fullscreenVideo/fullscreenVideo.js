 window.addEventListener('load', function () {
      const link = document.querySelector('.button-container a[href$=".mp4"]');
      if (link) {
        const videoUrl = link.href;

        const video = document.createElement('video');
        video.src = videoUrl;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.controls = true;
        video.style.width = '100%';
        video.style.height = 'auto';

        const container = link.closest('.button-container');
        container.innerHTML = '';
        container.appendChild(video);

        // Ensure video plays after being added to DOM
        video.play().catch(error => {
          console.warn('Autoplay failed:', error);
        });
      } else {
        console.warn("Video link not found.");
      }
    });
