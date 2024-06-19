let cart = [];

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;

    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = totalPrice;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(div);
    });

    cartContainer.style.display = cart.length ? 'block' : 'none';
}

function clearCart() {
    cart = [];
    updateCart();
}

document.getElementById('cart-link').addEventListener('click', () => {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
});

