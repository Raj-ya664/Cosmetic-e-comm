// Get the elements for the cart
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCartButton = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

// Function to open the cart modal
cartButton.addEventListener("click", () => {
  cartModal.style.display = "flex";
  updateCartDisplay();
});

// Function to close the cart modal
closeCartButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Add to Cart function
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const productName = e.target.getAttribute("data-product");
    const productPrice = parseFloat(e.target.getAttribute("data-price"));

    // Check if product is already in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCartDisplay();
  });
});

// Update cart display
function updateCartDisplay() {
  cartItemsList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

// Variables to handle the sliding logic
const heroImages = document.querySelector('.hero-images');
let currentIndex = 0;

// Array to hold all images in the hero section
const images = document.querySelectorAll('.hero-image');

// Function to move to the next image
function slideImages() {
  // Update the current index
  currentIndex = (currentIndex + 1) % images.length;

  // Move the images by updating the transform property
  heroImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change image every 3 seconds
setInterval(slideImages, 3000);
