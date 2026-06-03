// 🏔️ GRAVITY FALLS MASTER SCRIPT (Shared across all pages)

// HOMEPAGE SLIDER CONTROLLER (Wrapped with safety checks)
const track = document.querySelector('.slider_track');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const progressFill = document.querySelector('.progress_fill');

// Only add event listeners if these elements actually exist on the current page
if (track && nextBtn && prevBtn && progressFill) {
    let currentPosition = 0;

    nextBtn.addEventListener('click', () => {
        if (currentPosition === 0) {
            currentPosition = -100; 
            track.style.transform = `translateX(${currentPosition}%)`;
            progressFill.style.left = '50%'; 
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPosition === -100) {
            currentPosition = 0; 
            track.style.transform = `translateX(${currentPosition}%)`;
            progressFill.style.left = '0%'; 
        }
    });
}


// GLOBAL E-COMMERCE ENGINE
const CartEngine = {
    // Array database to read dynamic details if needed
    products: [
        { id: 1, name: "Half Dome 2 Tent with Footprint", price: 329.00 },
        { id: 2, name: "MegaMat Duo Sleeping Pad", price: 399.95 },
        { id: 3, name: "Tensor All-Season Insulated Sleeping Pad", price: 199.95 },
        { id: 4, name: "Atmos AG 65 Backpack", price: 340.00 },
        { id: 5, name: "Everest 2X Camping Stove", price: 180.00 },
        { id: 6, name: "Stormbreak 2 Tent", price: 185.00 },
        { id: 7, name: "Trailblazer Trekking Poles", price: 99.95 },
        { id: 8, name: "Starlight Camp Lantern", price: 59.95 }
    ],

    getCart() {
        return JSON.parse(localStorage.getItem('gf_cart_data')) || [];
    },

    saveCart(cart) {
        localStorage.setItem('gf_cart_data', JSON.stringify(cart));
        this.updateNavCounter();
    },

    // Executed directly by the HTML button clicks
    addToCart(productId, name, price, image) {
        const cart = this.getCart();
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, name: name, price: parseFloat(price), image: image, quantity: 1 });
        }
        
        this.saveCart(cart);
        alert(`${name} added to your adventure pack!`);
    },

    updateNavCounter() {
        const badge = document.querySelector('.cart_counter_badge');
        if (!badge) return;
        
        const cart = this.getCart();
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.textContent = '0';
            badge.style.display = 'none';
        }
    }
};

// Auto-update cart icons globally on page load
document.addEventListener('DOMContentLoaded', () => {
    CartEngine.updateNavCounter();
});