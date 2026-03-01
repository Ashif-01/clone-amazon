// Track the number of items in the cart
let cartCount = 0;

// Function triggered when the Cart area is clicked
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Optional: Add a little animation or alert for feedback
    console.log("Item added to cart. Total items: " + cartCount);
}

// Function for the search button
function triggerSearch() {
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput) {
        alert("Searching Amazon for: " + searchInput);
    } else {
        alert("Please enter a product to search.");
    }
}
