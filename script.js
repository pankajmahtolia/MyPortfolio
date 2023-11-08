function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


//   document.addEventListener("DOMContentLoaded", function () {
//     var name = document.querySelector(".title");
//     name.style.opacity = "1"; // Setting initial opacity to trigger the animation
//   });


// const nameElement = document.getElementById('animatedName');

// function animateName() {
//   let fontSize = 36;
//   const interval = setInterval(() => {
//     fontSize += 2;
//     nameElement.style.fontSize = fontSize + 'px';
//     if (fontSize >= 60) {
//       clearInterval(interval);
//     }
//   }, 100);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   setTimeout(animateName, 1000); // Delay the animation by 1 second
// });
