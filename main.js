// Fade-in Animation
document.addEventListener("DOMContentLoaded", function() {
    // Get all content cells
    var contentCells = document.querySelectorAll(".content-cell");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to add fade-in class when element is in the viewport
    function addFadeInClass() {
        contentCells.forEach(function(cell) {
            if (isInViewport(cell)) {
                cell.classList.add("fade-in");
            }
        });
    }

    // Add fade-in class on page load
    addFadeInClass();

    // Add event listener for scrolling
    window.addEventListener("scroll", function() {
        addFadeInClass();
    });
});

// Sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "350px";
  }

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("open-btn").style.marginRight = "0";
    document.querySelector(".content").style.marginRight = "0";
  }

// Scrollup
  function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }

// Hide Scrollup Button
  window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};