// Add event listeners to destinations
const destinations = document.querySelectorAll('.destination');
destinations.forEach(destination => {
  destination.addEventListener('click', () => {
    destination.classList.toggle('active');
  });
});



function showBlock(blockId) {
  var blocks = document.getElementsByClassName("china");
  //Corresponding display block
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].id === blockId) {
      blocks[i].style.display = "flex";
    } else {
      blocks[i].style.display = "none";
    }
  }

  // Hide Block 
  var block = document.getElementById("china");
  block.style.display = "none";
}

// Get the hero section and the images
const heroSection = document.querySelector('.hero');
const images = ['./img/CyberSecurity.jpg', './img/CyberSecurity2.jpg', './img/CyberSecurity3.jpg'];
let currentImageIndex = 0;

// Function to update the hero image
function updateHeroImage() {
  heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Event listener for the left arrow
document.querySelector('.left-arrow').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateHeroImage();
});

// Event listener for the right arrow
document.querySelector('.right-arrow').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateHeroImage();
});

// Initial image update
updateHeroImage();