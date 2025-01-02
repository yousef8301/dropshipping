const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const totalItems = document.getElementById('totalItems');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<span>${index + 1}. ${item.name}</span><span>$${item.price}</span><button onclick="removeFromCart(${index})">&times;</button>`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalPrice.textContent = `Total: $${total}`;
    totalItems.textContent = `Items: ${cart.length}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    cart.length = 0;
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCart() {
    const shoppingCart = document.getElementById('shoppingCart');
    shoppingCart.style.display = shoppingCart.style.display === 'none' || shoppingCart.style.display === '' ? 'block' : 'none';
}

function closeCart() {
    const shoppingCart = document.getElementById('shoppingCart');
    shoppingCart.style.display = 'none';
}

window.addEventListener('load', updateCart);