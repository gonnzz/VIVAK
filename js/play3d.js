

document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
      const video = project.querySelector('.project-video');
      const image = project.querySelector('.project-image');

      project.addEventListener('mouseenter', () => {
          video.play();
      });

      project.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0; // Reinicia el video
      });
  });
});

