const toggleBtn = document.querySelector('.toggle');
const showcaseSection = document.querySelector('.showcase');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  showcaseSection.classList.toggle('active');
});