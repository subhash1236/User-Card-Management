function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';
    cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'card';
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(userCard);
    });
}

function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();
