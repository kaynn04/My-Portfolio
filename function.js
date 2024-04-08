// Scrolling Effect
const sections = document.querySelectorAll('.hidden');
 
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Here you can add your desired action when an element comes into view
      console.log(entry.target.id + ' is in view');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 70);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// smooth scroll when header is clicked

document.addEventListener('DOMContentLoaded', function () {
  // Get all links with the class "scroll-link"
  const scrollLinks = document.querySelectorAll('.scroll-link');

  // Attach a click event listener to each link
  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default behavior of the link

          const targetId = this.getAttribute('href').substring(1); // Get the target element's id
          const targetElement = document.getElementById(targetId); // Get the target element

          // Check if the target element exists
          if (targetElement) {
              // Use the smooth scroll function
              smoothScroll(targetElement);
          }
      });
  });

  // Smooth scroll function
  function smoothScroll(target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Calculate the target position
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Use smooth scrolling
      });
  }
});

  // typing effect
  const typedText = document.getElementById('typed-text');
    const titles = ['Web Developer', 'Database Admin', 'Programmer']; // Add closing quotes
    let currentTitleIndex = 0;
    let currentCharIndex = 0;

    function typeTitle() {
      if (currentCharIndex === titles[currentTitleIndex].length) {
        // Wait for 1 second before typing the next title
        setTimeout(() => {
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
          currentCharIndex = 0;
          typeTitle();
        }, 1000);
        return;
      }

      typedText.textContent = titles[currentTitleIndex].substring(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(typeTitle, 50); // Adjust typing speed as desired
    }

    typeTitle();

// img sliding

$(document).ready(function(){
  const slider = $('.slider');
  const sliderIndicators = $('#sliderIndicators');

  slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: false,
      nextArrow: false,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });

  // Add indicators dynamically
  const totalSlides = slider.slick('getSlick').slideCount;
  for (let i = 0; i < totalSlides; i++) {
      const indicatorClass = i === 0 ? 'indicator active' : 'indicator';
      sliderIndicators.append('<div class="' + indicatorClass + '" data-slide="' + i + '"></div>');
  }

  // Update indicators on slide change
  slider.on('afterChange', function (event, slick, currentSlide) {
      $('.indicator').removeClass('active');
      $('.indicator[data-slide="' + currentSlide + '"]').addClass('active');
  });

  // Handle indicator click for manual navigation
  sliderIndicators.on('click', '.indicator', function() {
      const slideIndex = $(this).data('slide');
      slider.slick('slickGoTo', slideIndex);
  });
});

function toggleView() {
  $('.slider').slick('slickSetOption', 'slidesToShow', 'all', true);
  $('#viewMore').hide();
}

// success notif

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
      var successMessage = document.getElementById('success-message');
      if (successMessage) {
          successMessage.style.display = 'none';
      }
  }, 5000); // 5000 milliseconds (5 seconds) delay
});

document.addEventListener('DOMContentLoaded', function () {
  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
  });
});