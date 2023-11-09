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


  
 document.addEventListener('DOMContentLoaded', function () {
      particlesJS('particles-js', {
          particles: {
              number: {
                  value: 80,
                  density: {
                      enable: true,
                      value_area: 800
                  }
              },
              color: {
                  value: '#000000'
              },
              shape: {
                  type: 'circle',
                  stroke: {
                      width: 0,
                      color: '#000000'
                  },
                  polygon: {
                      nb_sides: 5
                  }
              },
              opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                  }
              },
              size: {
                  value: 3,
                  random: true,
                  anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                  }
              },
              line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#000000',
                  opacity: 0.4,
                  width: 1
              },
              move: {
                  enable: true,
                  speed: 6,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                  }
              }
          },
          interactivity: {
              detect_on: 'canvas',
              events: {
                  onhover: {
                      enable: true,
                      mode: 'grab'
                  },
                  onclick: {
                      enable: true,
                      mode: 'push'
                  },
                  resize: true
              },
              modes: {
                  grab: {
                      distance: 140,
                      line_linked: {
                          opacity: 1
                      }
                  },
                  bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4
                  },
                  push: {
                      particles_nb: 4
                  },
                  remove: {
                      particles_nb: 2
                  }
              }
          },
          retina_detect: true
      });
  });
