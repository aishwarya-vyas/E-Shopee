// Sample product data
const products = [
    { name: 'Highlighters', price: 850.00 },
    { name: 'Watch', price: 900.00 },
    { name: 'Sarees', price: 1500.00 },
    { name: 'Jewellery', price: 400.00 },
    { name: 'Toys', price: 300.00 },
    { name: 'Headphones', price: 5000.00 },
    { name: 'Shoes', price: 2000.00 },
    { name: 'Books', price: 1000.00 },
    { name: 'Shades', price: 4000.00 },
    { name: 'T-Shirts', price: 500.00 }
];

// Initialize cart and total
let cart = [];
let total = 0;

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCartDisplay();
}

// Function to update the cart display
// Function to remove a product from the cart
function removeFromCart(product) {
    const index = cart.findIndex((item) => item.name === product.name);

    if (index !== -1) {
        const removedProduct = cart.splice(index, 1)[0];
        total -= removedProduct.price;
        updateCartDisplay();
    }
}

// Update the click event listener for the "Remove" button
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

    cart.forEach((product) => {
        const productContainer = document.createElement('div');
        productContainer.className = 'cart-item';

        const productName = document.createElement('span');
        productName.innerText = product.name;
        productName.className = 'product-name';

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-button';

        // Add a click event listener for the remove button
        removeButton.addEventListener('click', () => {
            removeFromCart(product);
            // After removal, we can update the cart display and reassign the "remove-button" click event
            updateCartDisplay();
        });

        productContainer.appendChild(productName);
        productContainer.appendChild(removeButton);

        cartItems.appendChild(productContainer);
    });

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.innerText = `₹${total.toFixed(2)}`;
}

// Rest of your code remains the same

// Add click event listeners to Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(products[index]);
        $('#addedToCartModal').modal('show');
        // Toggle the "clicked" class to change the button color
        button.classList.toggle('clicked');
    });
});

function goToCart() {
    // Get the element (e.g., by its ID) of the shopping cart section
    const cartSection = document.getElementById('sc'); // Use the appropriate ID of your cart section

    // Scroll to the cart section
    cartSection.scrollIntoView({ behavior: 'smooth' });

    $('#addedToCartModal').modal('hide');
}

const checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', () => {
    updateCheckoutModal();
    $('#checkoutModal').modal('show'); // Open the checkout modal
    // You can add additional checkout logic here if needed
});

function updateCheckoutModal() {
    const modalTotalAmount = document.getElementById('modalTotalAmount');
    modalTotalAmount.textContent = total.toFixed(2);
}

// JavaScript for the image carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    slides[index].style.display = 'block';
    currentSlide = index;
}

// Display the first slide
showSlide(currentSlide);

// Function to show the next slide
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Function to show the previous slide
function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Automatically advance the slides every few seconds
setInterval(nextSlide, 4000); // Changes the slide after every 2 seconds

function placeorder(){
    window.location.href = 'payment.html';
}