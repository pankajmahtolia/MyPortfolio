function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


  function restartTypingAnimation() {
    const nameElement = document.getElementById('animatedName');
    nameElement.style.animation = 'none';
    void nameElement.offsetWidth; // Trigger reflow to restart the animation
    nameElement.style.animation = 'typing 4s steps(14) 2s infinite, blink-caret 0.5s step-end infinite';
  }

  setInterval(restartTypingAnimation, 6000); // Restart every 10 seconds (8s typing + 2s pause)


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    function checkScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
  
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      });
    }
  
    // Initial check on page load
    checkScroll();
  
    // Check on scroll
    window.addEventListener("scroll", checkScroll);
  });
  





