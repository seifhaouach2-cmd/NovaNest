document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.textContent.includes("Buy")) {
      alert("Thank you for your purchase! (Demo)");
    } else {
      document.getElementById("products").scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
