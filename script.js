let cart = 0;

// زر Explore Store
const exploreBtn = document.querySelector(".hero .btn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("products").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// أزرار Add to Cart
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    document.getElementById("cart-count").textContent = cart;

    button.textContent = "✓ Added";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});

