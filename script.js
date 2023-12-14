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

let cart = [];
let total = 0;

function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCartDisplay();
}

function removeFromCart(product) {
    const index = cart.findIndex((item) => item.name === product.name);

    if (index !== -1) {
        const removedProduct = cart.splice(index, 1)[0];
        total -= removedProduct.price;
        updateCartDisplay();
    }
}

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

        removeButton.addEventListener('click', () => {
            removeFromCart(product);
            updateCartDisplay();
        });

        productContainer.appendChild(productName);
        productContainer.appendChild(removeButton);

        cartItems.appendChild(productContainer);
    });

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.innerText = `₹${total.toFixed(2)}`;
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(products[index]);
        $('#addedToCartModal').modal('show');
    });
});

function goToCart() {
    const cartSection = document.getElementById('sc');
    cartSection.scrollIntoView({ behavior: 'smooth' });
    $('#addedToCartModal').modal('hide');
}

const checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', () => {
    updateCheckoutModal();
    $('#checkoutModal').modal('show');
});

function updateCheckoutModal() {
    const modalTotalAmount = document.getElementById('modalTotalAmount');
    modalTotalAmount.textContent = total.toFixed(2);
}


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    slides[index].style.display = 'block';
    currentSlide = index;
}

showSlide(currentSlide);

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 4000); 

function placeorder(){
    window.location.href = 'payment.html';
}
