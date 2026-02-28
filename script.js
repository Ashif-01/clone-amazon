// Track the number of items in the cart
let cartCount = 0;

// Function triggered when 'Add to Cart' is clicked
function addToCart() {
    cartCount++; // Increase the count by 1
    // Update the HTML text inside the cart-count span
    document.getElementById('cart-count').innerText = cartCount;
}